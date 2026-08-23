

/**
 * Universal browser distribution entry point.
 *
 * Application-specific configuration belongs to applications using the
 * library, not to aether-client.
 */
export * from "./aether_client";

export {
    CryptoLib,
    IpInfo,
    ServerDescriptor,
    ServerDescriptorWithGeo,
    ServerType,
} from "./aether_api";
