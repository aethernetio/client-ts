/**
 * Experimental browser entry point for the main-site live network map.
 *
 * This intentionally exports only the symbols used by network-map.js. It does
 * not change the client implementation or protocol; it only narrows the public
 * browser library surface so Webpack can remove exports that the map never
 * references.
 */
export { AetherCloudClient } from "./aether_client";
export { ClientStateInLocalStorage } from "./aether_client_state_localstorage";
export { UUID } from "./aether_types";
export { CryptoLib, ServerDescriptor } from "./aether_api";
export { applySodium } from "./aether_crypto_sodium";
