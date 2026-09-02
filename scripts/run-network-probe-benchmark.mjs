#!/usr/bin/env node
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const argv = process.argv.slice(2);
const readArg = (name, fallback) => {
  const prefix = `--${name}=`;
  const found = argv.find(value => value.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
};

const variantArg = readArg('variant', 'both');
const variants = variantArg === 'both' ? ['universal', 'probe'] : [variantArg];
if (variants.some(value => !['universal', 'probe'].includes(value))) {
  throw new Error(`Unsupported --variant=${variantArg}`);
}

const runs = Math.max(1, Number.parseInt(readArg('runs', '5'), 10));
const cpuRates = readArg('cpu', '1,4').split(',').map(Number).filter(value => value >= 1);
const mode = readArg('mode', 'both');
if (!['cold', 'both'].includes(mode)) {
  throw new Error('Warm measurements require a preceding cold run; use --mode=both.');
}
const allowNotReady = readArg('allow-not-ready', 'false') === 'true';
const outputPath = path.resolve(readArg('output', 'network-probe-benchmark.json'));
const port = Number.parseInt(readArg('port', '8877'), 10);

const root = process.cwd();
const mime = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8']
]);

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url ?? '/', `http://127.0.0.1:${port}`);
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const requested = path.resolve(root, relative || 'bench/network-probe/harness.html');
    if (!requested.startsWith(root + path.sep)) {
      res.writeHead(403).end('forbidden');
      return;
    }
    if (!fs.existsSync(requested) || !fs.statSync(requested).isFile()) {
      res.writeHead(404).end('not found');
      return;
    }
    const ext = path.extname(requested);
    res.setHeader('Content-Type', mime.get(ext) ?? 'application/octet-stream');
    if (requested.includes(`${path.sep}build${path.sep}`)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'no-store');
    }
    res.writeHead(200);
    fs.createReadStream(requested).pipe(res);
  } catch (error) {
    res.writeHead(500).end(String(error));
  }
});

const listen = () => new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(port, '127.0.0.1', resolve);
});
const closeServer = () => new Promise(resolve => server.close(resolve));

const chromeCandidates = [
  process.env.CHROME_BIN,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean);
const executablePath = chromeCandidates.find(candidate => fs.existsSync(candidate));
if (!executablePath) {
  throw new Error('Chrome/Chromium not found. Set CHROME_BIN.');
}

const roundNumbers = value => {
  if (Array.isArray(value)) return value.map(roundNumbers);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, roundNumbers(item)]));
  }
  if (typeof value === 'number' && Number.isFinite(value)) return Math.round(value * 100) / 100;
  return value;
};

const median = values => {
  const sorted = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!sorted.length) return null;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};

const metrics = [
  'scriptLoadEvalMs', 'sodiumReadyMs', 'stateRestoreMs', 'clientConstructMs',
  'connectMs', 'serverListMs', 'myIpMs', 'firstWorkConnectionMs',
  'firstPingMs', 'allPingsMs', 'persistStateMs', 'longTaskCount', 'longTaskTotalMs'
];

const summarize = samples => {
  const groups = new Map();
  for (const sample of samples.filter(item => item.status === 'ok')) {
    const key = `${sample.variant}|cpu${sample.cpuRate}|${sample.cold ? 'cold' : 'warm'}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(sample);
  }
  const result = {};
  for (const [key, group] of groups) {
    result[key] = {
      samples: group.length,
      medians: Object.fromEntries(metrics.map(metric => [metric, median(group.map(item => item[metric]))]))
    };
  }
  return roundNumbers(result);
};

await listen();
let browser;
const samples = [];
let fatal = null;

try {
  browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  for (const cpuRate of cpuRates) {
    for (const variant of variants) {
      for (let run = 1; run <= runs; run++) {
        const context = browser.createBrowserContext
          ? await browser.createBrowserContext()
          : await browser.createIncognitoBrowserContext();
        const page = await context.newPage();
        page.setDefaultTimeout(45000);
        const session = await page.createCDPSession();
        if (cpuRate > 1) {
          await session.send('Emulation.setCPUThrottlingRate', { rate: cpuRate });
        }

        const harnessUrl = `http://127.0.0.1:${port}/bench/network-probe/harness.html`;
        await page.goto(harnessUrl, { waitUntil: 'load' });
        await page.waitForFunction(() => window.__aetherBenchmarkReady === true);

        const execute = async cold => {
          try {
            const result = await page.evaluate(
              ({ variant, cold }) => window.runAetherNetworkBenchmark({ variant, cold }),
              { variant, cold }
            );
            return roundNumbers({ ...result, cpuRate, run });
          } catch (error) {
            return {
              status: 'error', variant, cold, cpuRate, run,
              error: String(error?.message ?? error)
            };
          }
        };

        const coldResult = await execute(true);
        samples.push(coldResult);
        console.log(JSON.stringify(coldResult));

        if (coldResult.status === 'not-ready') {
          await context.close();
          if (!allowNotReady) {
            fatal = new Error(`Probe is not live yet (stage=${coldResult.stage}).`);
            break;
          }
          continue;
        }

        if (coldResult.status === 'error') {
          await context.close();
          fatal = new Error(`Cold ${variant} benchmark failed.`);
          break;
        }

        if (mode === 'both') {
          await page.reload({ waitUntil: 'load' });
          await page.waitForFunction(() => window.__aetherBenchmarkReady === true);
          const warmResult = await execute(false);
          samples.push(warmResult);
          console.log(JSON.stringify(warmResult));
          if (warmResult.status === 'error') {
            fatal = new Error(`Warm ${variant} benchmark failed.`);
          }
        }

        await context.close();
        if (fatal) break;
      }
      if (fatal) break;
    }
    if (fatal) break;
  }
} finally {
  if (browser) await browser.close();
  await closeServer();
}

const report = roundNumbers({
  generatedAt: new Date().toISOString(),
  configuration: { variants, runs, cpuRates, mode, allowNotReady },
  samples,
  summary: summarize(samples)
});
fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
console.log(`Wrote ${outputPath}`);

if (fatal) throw fatal;
