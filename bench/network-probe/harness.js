(() => {
  'use strict';

  const REGISTRATION_URI = 'wss://dbservice.aethernet.io:9013';
  const PARENT_UID = 'B1AC52C8-8D94-BD39-4C01-A631AC594165';
  const CLIENT_NAME = 'browser-client-benchmark';

  const VARIANTS = {
    universal: {
      script: '/build/browser/aether-client.min.js',
      storageKey: 'aethernet-browser-bench-universal-v1'
    },
    probe: {
      script: '/build/network-probe/aether-network-probe.min.js',
      storageKey: 'aethernet-browser-bench-probe-v1'
    }
  };

  const now = () => performance.now();

  const loadScript = src => new Promise((resolve, reject) => {
    const startedAt = now();
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve(now() - startedAt);
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });

  const observeLongTasks = () => {
    const state = { count: 0, totalMs: 0 };
    let observer = null;

    if (
      typeof PerformanceObserver === 'function'
      && PerformanceObserver.supportedEntryTypes?.includes('longtask')
    ) {
      observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          state.count++;
          state.totalMs += entry.duration;
        }
      });
      observer.observe({ type: 'longtask', buffered: true });
    }

    return {
      snapshot() {
        observer?.takeRecords().forEach(entry => {
          state.count++;
          state.totalMs += entry.duration;
        });
        observer?.disconnect();
        return {
          longTaskCount: state.count,
          longTaskTotalMs: Math.round(state.totalMs * 100) / 100
        };
      }
    };
  };

  const timed = async fn => {
    const startedAt = now();
    const value = await fn();
    return { value, ms: now() - startedAt };
  };

  const writablePromise = connection => {
    if (connection.isWritable()) return Promise.resolve();
    return connection.connectFuture.toPromise(15000);
  };

  const runUniversal = async cold => {
    const config = VARIANTS.universal;
    if (cold) localStorage.removeItem(config.storageKey);

    const longTasks = observeLongTasks();
    let client = null;

    try {
      const scriptLoadEvalMs = await loadScript(config.script);
      const Aether = window.Aether;
      if (!Aether?.AetherCloudClient || !Aether?.applySodium) {
        throw new Error('Universal browser client API unavailable');
      }

      const sodium = await timed(() => Aether.applySodium());

      const stateStartedAt = now();
      const state = new Aether.ClientStateInLocalStorage(
        Aether.UUID.fromString(PARENT_UID),
        [REGISTRATION_URI],
        undefined,
        Aether.CryptoLib.SODIUM,
        config.storageKey
      );
      const stateRestoreMs = now() - stateStartedAt;

      const constructStartedAt = now();
      client = new Aether.AetherCloudClient(state, CLIENT_NAME);
      const clientConstructMs = now() - constructStartedAt;

      const connection = await timed(() => client.connect().toPromise(25000));

      const knownDescriptors = client.getKnownServerDescriptors();
      if (knownDescriptors.length > 0) {
        client.connectServers(knownDescriptors);
      }

      const serversTimed = timed(() => client.getServers().toPromise(10000));
      const ipTimed = timed(() => client.getMyIp().toPromise(10000));
      const [serversResult, ipResult] = await Promise.all([serversTimed, ipTimed]);
      const servers = serversResult.value;

      const bareDescriptors = servers.map(descriptor => new Aether.ServerDescriptor(
        descriptor.id,
        descriptor.ipAddress
      ));

      const workStartedAt = now();
      const workConnections = client.connectServers(bareDescriptors);
      const writable = workConnections.map(writablePromise);
      let firstWorkConnectionMs = null;
      if (writable.length > 0) {
        await Promise.any(writable);
        firstWorkConnectionMs = now() - workStartedAt;
      }

      const pingStartedAt = now();
      const pingPromises = bareDescriptors.map((descriptor, index) =>
        writable[index]
          .then(() => client.measureServerPingMs(descriptor.id).toPromise(10000))
          .then(value => ({ value: Number(value), finishedAt: now() }))
      );

      let firstPingMs = null;
      if (pingPromises.length > 0) {
        try {
          const first = await Promise.any(pingPromises);
          firstPingMs = first.finishedAt - pingStartedAt;
        } catch (_) {
          // All pings failed. The settled results below preserve that fact.
        }
      }

      const pingSettled = await Promise.allSettled(pingPromises);
      const allPingsMs = now() - pingStartedAt;
      const pingSuccessCount = pingSettled.filter(item => item.status === 'fulfilled').length;

      const persistStartedAt = now();
      state.saveState();
      const persistStateMs = now() - persistStartedAt;

      await client.destroy(true).toPromise(5000);
      client = null;

      return {
        status: 'ok',
        variant: 'universal',
        cold,
        scriptLoadEvalMs,
        sodiumReadyMs: sodium.ms,
        stateRestoreMs,
        clientConstructMs,
        connectMs: connection.ms,
        serverListMs: serversResult.ms,
        myIpMs: ipResult.ms,
        firstWorkConnectionMs,
        firstPingMs,
        allPingsMs,
        persistStateMs,
        knownServerCount: knownDescriptors.length,
        serverCount: servers.length,
        pingSuccessCount,
        myIpReceived: Boolean(ipResult.value),
        ...longTasks.snapshot()
      };
    } finally {
      if (client) {
        try { await client.destroy(true).toPromise(5000); } catch (_) {}
      }
    }
  };

  const runProbe = async cold => {
    const config = VARIANTS.probe;
    if (cold) localStorage.removeItem(config.storageKey);

    const longTasks = observeLongTasks();
    const scriptLoadEvalMs = await loadScript(config.script);
    const Probe = window.AetherNetworkProbe;
    const stage = Probe?.NETWORK_PROBE_IMPLEMENTATION_STAGE ?? 'missing';

    if (!Probe?.AetherNetworkProbeClient || stage === 'foundation') {
      return {
        status: 'not-ready',
        variant: 'probe',
        cold,
        stage,
        scriptLoadEvalMs,
        ...longTasks.snapshot()
      };
    }

    const client = new Probe.AetherNetworkProbeClient({
      parentUid: PARENT_UID,
      registrationUris: [REGISTRATION_URI],
      storageKey: config.storageKey,
      name: CLIENT_NAME
    });

    try {
      const sodium = await timed(() => client.initializeCrypto());
      const state = await timed(() => client.restoreState());
      const connection = await timed(() => client.connect());

      const knownDescriptors = client.getKnownServerDescriptors();
      if (knownDescriptors.length > 0) {
        await client.connectServers(knownDescriptors);
      }

      const serversTimed = timed(() => client.getServers());
      const ipTimed = timed(() => client.getMyIp());
      const [serversResult, ipResult] = await Promise.all([serversTimed, ipTimed]);
      const servers = serversResult.value;

      const workStartedAt = now();
      await client.connectServers(servers);
      await client.waitForFirstWorkConnection();
      const firstWorkConnectionMs = now() - workStartedAt;

      const pingStartedAt = now();
      const pingPromises = servers.map(server =>
        client.measureServerPingMs(server.id)
          .then(value => ({ value: Number(value), finishedAt: now() }))
      );

      let firstPingMs = null;
      if (pingPromises.length > 0) {
        try {
          const first = await Promise.any(pingPromises);
          firstPingMs = first.finishedAt - pingStartedAt;
        } catch (_) {}
      }

      const pingSettled = await Promise.allSettled(pingPromises);
      const allPingsMs = now() - pingStartedAt;
      const pingSuccessCount = pingSettled.filter(item => item.status === 'fulfilled').length;
      const persist = await timed(() => client.persistState());

      return {
        status: 'ok',
        variant: 'probe',
        cold,
        stage,
        scriptLoadEvalMs,
        sodiumReadyMs: sodium.ms,
        stateRestoreMs: state.ms,
        connectMs: connection.ms,
        serverListMs: serversResult.ms,
        myIpMs: ipResult.ms,
        firstWorkConnectionMs,
        firstPingMs,
        allPingsMs,
        persistStateMs: persist.ms,
        knownServerCount: knownDescriptors.length,
        serverCount: servers.length,
        pingSuccessCount,
        myIpReceived: Boolean(ipResult.value),
        ...longTasks.snapshot()
      };
    } finally {
      try { await client.destroy(); } catch (_) {}
    }
  };

  window.runAetherNetworkBenchmark = async ({ variant, cold }) => {
    if (!(variant in VARIANTS)) throw new Error(`Unknown variant: ${variant}`);
    const status = document.getElementById('status');
    status.textContent = `${variant} / ${cold ? 'cold' : 'warm'} running`;
    const result = variant === 'universal'
      ? await runUniversal(Boolean(cold))
      : await runProbe(Boolean(cold));
    status.textContent = JSON.stringify(result, null, 2);
    return result;
  };

  window.__aetherBenchmarkReady = true;
})();
