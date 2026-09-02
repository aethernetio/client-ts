#!/usr/bin/env node
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const port = 8891;
const root = process.cwd();
const outputPath = path.resolve(process.argv[2] || 'network-probe-compat-soak.json');
const mime = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8']
]);

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url ?? '/', `http://127.0.0.1:${port}`);
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const requested = path.resolve(root, relative || 'bench/network-probe/harness.html');
    if (!requested.startsWith(root + path.sep)) return res.writeHead(403).end('forbidden');
    if (!fs.existsSync(requested) || !fs.statSync(requested).isFile()) return res.writeHead(404).end('not found');
    res.setHeader('Content-Type', mime.get(path.extname(requested)) ?? 'application/octet-stream');
    res.setHeader('Cache-Control', requested.includes(`${path.sep}build${path.sep}`)
      ? 'public, max-age=31536000, immutable'
      : 'no-store');
    res.writeHead(200);
    fs.createReadStream(requested).pipe(res);
  } catch (error) {
    res.writeHead(500).end(String(error));
  }
});

const chromeCandidates = [
  process.env.CHROME_BIN,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean);
const executablePath = chromeCandidates.find(candidate => fs.existsSync(candidate));
if (!executablePath) throw new Error('Chrome/Chromium not found');

const listen = () => new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(port, '127.0.0.1', resolve);
});
const closeServer = () => new Promise(resolve => server.close(resolve));

await listen();
let browser;
const report = { stateCompatibility: {}, soak: null };

try {
  browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  const makePage = async () => {
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:${port}/bench/network-probe/harness.html`, {
      waitUntil: 'domcontentloaded'
    });
    return { context, page };
  };

  const exerciseUniversal = async (page, { script, storageKey, cold }) => page.evaluate(async ({ script, storageKey, cold }) => {
    const REGISTRATION_URI = 'wss://dbservice.aethernet.io:9013';
    const PARENT_UID = 'B1AC52C8-8D94-BD39-4C01-A631AC594165';
    if (cold) localStorage.removeItem(storageKey);

    const load = src => new Promise((resolve, reject) => {
      const tag = document.createElement('script');
      tag.src = src;
      tag.onload = resolve;
      tag.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(tag);
    });
    await load(script);
    const Aether = window.Aether;
    await Aether.applySodium();
    const state = new Aether.ClientStateInLocalStorage(
      Aether.UUID.fromString(PARENT_UID),
      [REGISTRATION_URI],
      undefined,
      Aether.CryptoLib.SODIUM,
      storageKey
    );
    const before = {
      hasUid: Boolean(state.getUid()),
      hasAlias: Boolean(state.getAlias())
    };
    let client = new Aether.AetherCloudClient(state, 'state-compat-universal');
    try {
      const started = performance.now();
      await client.connect().toPromise(25000);
      const connectMs = performance.now() - started;
      const known = client.getKnownServerDescriptors();
      if (known.length) client.connectServers(known);
      const [servers, ip] = await Promise.all([
        client.getServers().toPromise(10000),
        client.getMyIp().toPromise(10000)
      ]);
      const bare = servers.map(x => new Aether.ServerDescriptor(x.id, x.ipAddress));
      const connections = client.connectServers(bare);
      await Promise.any(connections.map(c => c.isWritable() ? Promise.resolve() : c.connectFuture.toPromise(15000)));
      const pings = await Promise.allSettled(bare.map(x => client.measureServerPingMs(x.id).toPromise(10000)));
      state.saveState();
      return {
        before,
        connectMs,
        knownServerCount: known.length,
        serverCount: servers.length,
        myIpReceived: Boolean(ip),
        pingSuccessCount: pings.filter(x => x.status === 'fulfilled').length,
        stateBytes: JSON.parse(localStorage.getItem(storageKey) || '[]').length
      };
    } finally {
      try { await client.destroy(true).toPromise(5000); } catch (_) {}
      client = null;
    }
  }, { script, storageKey, cold });

  const exerciseProbe = async (page, { storageKey, cold }) => page.evaluate(async ({ storageKey, cold }) => {
    const REGISTRATION_URI = 'wss://dbservice.aethernet.io:9013';
    const PARENT_UID = 'B1AC52C8-8D94-BD39-4C01-A631AC594165';
    if (cold) localStorage.removeItem(storageKey);

    if (!window.AetherNetworkProbe) {
      await new Promise((resolve, reject) => {
        const tag = document.createElement('script');
        tag.src = '/build/network-probe/aether-network-probe.min.js';
        tag.onload = resolve;
        tag.onerror = () => reject(new Error('Failed to load probe'));
        document.head.appendChild(tag);
      });
    }
    const Probe = window.AetherNetworkProbe;
    let client = new Probe.AetherNetworkProbeClient({
      parentUid: PARENT_UID,
      registrationUris: [REGISTRATION_URI],
      storageKey,
      name: 'state-compat-probe'
    });
    try {
      await client.initializeCrypto();
      await client.restoreState();
      const knownBeforeConnect = client.getKnownServerDescriptors().length;
      const started = performance.now();
      await client.connect();
      const connectMs = performance.now() - started;
      const known = client.getKnownServerDescriptors();
      if (known.length) await client.connectServers(known);
      const [servers, ip] = await Promise.all([client.getServers(), client.getMyIp()]);
      await client.connectServers(servers);
      await client.waitForFirstWorkConnection();
      const pings = await Promise.allSettled(servers.map(x => client.measureServerPingMs(x.id)));
      await client.persistState();
      return {
        stage: Probe.NETWORK_PROBE_IMPLEMENTATION_STAGE,
        knownBeforeConnect,
        connectMs,
        knownServerCount: known.length,
        serverCount: servers.length,
        myIpReceived: Boolean(ip),
        pingSuccessCount: pings.filter(x => x.status === 'fulfilled').length,
        stateBytes: JSON.parse(localStorage.getItem(storageKey) || '[]').length
      };
    } finally {
      try { await client.destroy(); } catch (_) {}
      client = null;
    }
  }, { storageKey, cold });

  // Exact current production browser bundle -> probe.
  {
    const { context, page } = await makePage();
    try {
      const storageKey = 'aethernet-cross-production-probe-v1';
      const production = await exerciseUniversal(page, {
        script: '/build/production/aether-client.min.js',
        storageKey,
        cold: true
      });
      const probe = await exerciseProbe(page, { storageKey, cold: false });
      if (!production.myIpReceived || production.pingSuccessCount === 0) throw new Error('Production state source failed live exercise');
      if (probe.knownBeforeConnect === 0) throw new Error('Probe did not restore production server descriptors');
      if (!probe.myIpReceived || probe.pingSuccessCount === 0) throw new Error('Probe failed after production state restore');
      report.stateCompatibility.productionToProbe = { production, probe };
    } finally {
      await context.close();
    }
  }

  // Probe -> exact current production browser bundle. This checks safe rollback.
  {
    const { context, page } = await makePage();
    try {
      const storageKey = 'aethernet-cross-probe-production-v1';
      const probe = await exerciseProbe(page, { storageKey, cold: true });
      const production = await exerciseUniversal(page, {
        script: '/build/production/aether-client.min.js',
        storageKey,
        cold: false
      });
      if (!probe.myIpReceived || probe.pingSuccessCount === 0) throw new Error('Probe state source failed live exercise');
      if (!production.before.hasUid || !production.before.hasAlias) throw new Error('Production client did not restore probe UID/alias');
      if (production.knownServerCount === 0) throw new Error('Production client did not restore probe descriptors');
      if (!production.myIpReceived || production.pingSuccessCount === 0) throw new Error('Production failed after probe state restore');
      report.stateCompatibility.probeToProduction = { probe, production };
    } finally {
      await context.close();
    }
  }

  // Same-client repeated refreshes + destroy/recreate from persisted state.
  {
    const { context, page } = await makePage();
    try {
      report.soak = await page.evaluate(async () => {
        const REGISTRATION_URI = 'wss://dbservice.aethernet.io:9013';
        const PARENT_UID = 'B1AC52C8-8D94-BD39-4C01-A631AC594165';
        const storageKey = 'aethernet-probe-soak-v1';
        localStorage.removeItem(storageKey);

        await new Promise((resolve, reject) => {
          const tag = document.createElement('script');
          tag.src = '/build/network-probe/aether-network-probe.min.js';
          tag.onload = resolve;
          tag.onerror = () => reject(new Error('Failed to load probe'));
          document.head.appendChild(tag);
        });
        const Probe = window.AetherNetworkProbe;

        const makeClient = () => new Probe.AetherNetworkProbeClient({
          parentUid: PARENT_UID,
          registrationUris: [REGISTRATION_URI],
          storageKey,
          name: 'network-probe-soak'
        });

        let client = makeClient();
        const cycles = [];
        try {
          await client.initializeCrypto();
          await client.restoreState();
          await client.connect();
          for (let cycle = 1; cycle <= 4; cycle++) {
            const started = performance.now();
            const [servers, ip] = await Promise.all([client.getServers(), client.getMyIp()]);
            await client.connectServers(servers);
            await client.waitForFirstWorkConnection();
            const pings = await Promise.allSettled(servers.map(x => client.measureServerPingMs(x.id)));
            await client.persistState();
            cycles.push({
              cycle,
              elapsedMs: performance.now() - started,
              serverCount: servers.length,
              myIpReceived: Boolean(ip),
              pingSuccessCount: pings.filter(x => x.status === 'fulfilled').length
            });
            await new Promise(resolve => setTimeout(resolve, 1200));
          }
        } finally {
          await client.destroy();
        }

        client = makeClient();
        let recreate;
        try {
          await client.initializeCrypto();
          await client.restoreState();
          const knownBeforeConnect = client.getKnownServerDescriptors().length;
          const start = performance.now();
          await client.connect();
          const connectMs = performance.now() - start;
          const [servers, ip] = await Promise.all([client.getServers(), client.getMyIp()]);
          await client.connectServers(servers);
          await client.waitForFirstWorkConnection();
          const pings = await Promise.allSettled(servers.map(x => client.measureServerPingMs(x.id)));
          recreate = {
            knownBeforeConnect,
            connectMs,
            serverCount: servers.length,
            myIpReceived: Boolean(ip),
            pingSuccessCount: pings.filter(x => x.status === 'fulfilled').length
          };
        } finally {
          await client.destroy();
        }

        return { stage: Probe.NETWORK_PROBE_IMPLEMENTATION_STAGE, cycles, recreate };
      });

      if (report.soak.cycles.length !== 4) throw new Error('Soak did not complete 4 refresh cycles');
      for (const cycle of report.soak.cycles) {
        if (cycle.serverCount <= 0 || !cycle.myIpReceived || cycle.pingSuccessCount <= 0) {
          throw new Error(`Soak cycle ${cycle.cycle} failed live parity`);
        }
      }
      if (report.soak.recreate.knownBeforeConnect <= 0) throw new Error('Recreated probe did not restore descriptors');
      if (!report.soak.recreate.myIpReceived || report.soak.recreate.pingSuccessCount <= 0) throw new Error('Recreated probe failed live parity');
    } finally {
      await context.close();
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  if (browser) await browser.close();
  await closeServer();
}
