
package io.aether.cloudClient;

import io.aether.api.smarthub.*;
import io.aether.cloud.client.AetherCloudClient;
import io.aether.cloud.client.ClientStateInMemory;
import io.aether.logger.Log;
import io.aether.net.fastMeta.FastApiContext;
import io.aether.net.fastMeta.FastFutureContext;
import io.aether.net.fastMeta.FlushReport;

import io.aether.utils.futures.AFuture;


import java.io.File;
import java.net.URI;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class TestSmartDeviceEmulator {
    private final UUID serviceUid;
    private UUID deviceUid;
    private final String statePath;
    private AetherCloudClient client;
    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();

    public TestSmartDeviceEmulator(UUID serviceUid) {
        this.serviceUid = serviceUid;
        this.statePath = "smarthub-data/device-" + serviceUid + ".bin";
    }

    public UUID getDeviceUid() {
        return deviceUid;
    }


    public void start(String regUri) throws Exception {
        File stateFile = new File(statePath);
        ClientStateInMemory state = stateFile.exists()
                ? ClientStateInMemory.load(stateFile)
                : new ClientStateInMemory(serviceUid, List.of(URI.create(regUri)));
        client = new AetherCloudClient(state, "Emulator-for-" + serviceUid);
        
        AFuture ready = AFuture.make();
        client.connect()
            .to(() -> {
                try { state.save(stateFile); } catch (Exception e) { Log.error(e); }
                deviceUid = state.getUid();
                Log.info("Device Emulator connected", "uid", deviceUid);
                ready.done();
            })
            .onError(ready::error);
        
        ready.to(() -> {
            io.aether.cloud.client.MessageNode node = client.getMessageNode(serviceUid);
            var regCtx = node.toApi(SmartHomeClientDeviceApi.META, SmartHomeClientDeviceApi.EMPTY);
            final SmartHomeHubRegistryApi hubRemote = regCtx.makeRemote(SmartHomeHubRegistryApi.META);
            FastFutureContext devCtx = new FastApiContext() {
                @Override
                public void flush(FlushReport report) {
                    var d = remoteDataToArray();
                    if (d.length == 0) {
                        report.done();
                        return;
                    }
                    hubRemote.device(new DeviceStream(d));
                    regCtx.flush();
                }
            };
            SmartHomeDeviceApiRemote devApi = SmartHomeDeviceApiRemote.META.makeRemote(devCtx);
            scheduler.scheduleAtFixedRate(() -> {
                byte temp = (byte) (20 + (byte)(Math.random() * 10));
                SensorRecord record = new SensorRecord(temp, (byte) (System.currentTimeMillis() / 1000));
                devApi.reportState(deviceUid, new SensorRecord[]{record}).to(success -> {
                    if (success) Log.info("Temperature sent", "val", temp);
                });
                devApi.flush();
            }, 0, 5, TimeUnit.SECONDS);
        }).onError(e -> Log.error("Emulator startup failed", e));
    }


    public void stop() {
        scheduler.shutdown();
        if (client != null) client.destroy(true);
    }
}