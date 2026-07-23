# Æthernet TypeScript SDK

The Æthernet TypeScript SDK connects Node.js and browser applications to Æthernet for secure asynchronous messaging, RPC, access control, and device-to-device communication.

[Documentation](https://aethernet.io/documentation) · [Examples](https://github.com/aethernetio/aethernet-examples)

## Current package status

The package is currently named `aether-client` and is published to the Æthernet Nexus registry, not the public npm registry. The package and import names will be standardized before a stable public release.

## Install

Install the current unscoped package directly from the Æthernet registry:

```bash
npm install aether-client --registry=https://nexus.aethernet.io/npm-private/
```

Using this registry as a project-wide default would also redirect unrelated
unscoped dependencies, so the explicit command is safer until the package moves
to a public or scoped registry.

## Build from source

```bash
git clone https://github.com/aethernetio/client-ts.git
cd client-ts
npm install
npm run build
```

Run the test suite:

```bash
npm test
```

## Capabilities

- registration and client identity management;
- end-to-end encryption through libsodium;
- asynchronous operations through `AFuture` and `ARFuture<T>`;
- peer-to-peer messaging;
- generated binary RPC interfaces;
- batched lookup and access-control requests;
- Node.js and browser-oriented builds.

## Important warning

This repository is under active development. Verify the current exports in `build/aether_client.d.ts` after building because public API names may change before a stable release.

Do not place registry credentials in `package.json`, `.npmrc`, source files, or scripts committed to Git. Publishing credentials belong in repository secrets.

## License

See [LICENSE](LICENSE).
