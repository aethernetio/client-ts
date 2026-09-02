# AetherNetworkProbeClient browser test plan

## Goal
Build a browser-only network-observation client for the website use case without importing the full `AetherCloudClient` feature surface. Keep the existing wire protocol, generated metadata, persisted state format and Sodium cryptographic behavior.

## Required live path
1. Restore browser state or perform first registration.
2. Establish the Æthernet connection.
3. Return cached server descriptors when available.
4. Refresh the authoritative server list.
5. Obtain the public IP through the existing Æthernet API.
6. Start WORK-server transports in parallel.
7. Measure RTT for each selected WORK server.
8. Persist warm-start state.
9. Destroy transports and timers cleanly.

## Explicit exclusions for the first probe
- `AetherCloudClient`
- `aether_client_message`
- WebRTC / `aether_fastmeta_webrtc`
- access-group and client-to-client messaging behavior unless proven mandatory for login

Crypto, state, registration and WORK-connection modules may be reused when required by the protocol. Their cost must be measured rather than hidden.

## Comparative benchmark
Run the universal browser client and the probe in the same environment. Use at least 5 cold and 5 warm samples at normal CPU and 4x throttling. Record raw/gzip bytes, script load+evaluate, Sodium readiness, state restore, connect, getServers, getMyIp, first writable WORK connection, first ping, all pings, long-task count and long-task duration.

## Acceptance
A result counts only if the probe reaches the same live network data as the universal client: usable persisted identity/state, authoritative server list, public-IP response, writable WORK transport and successful RTT measurements. It must be materially smaller than the universal browser bundle and must not regress median cold/warm startup.

## Current lower bound
Protocol/runtime-only code is approximately 490 KB raw and 52 KB gzip before crypto and transports. This is a floor for the next implementation, not a final size target.
