// =============================================================================================
// FILE: AetherProtocolPlugin.ts
// PURPOSE: Standalone Generator for generating TypeScript code from ADSL YAML
// (Corrected Version)
// =============================================================================================

import * as path from 'path';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { generateAetherProtocol } from './aether_protocol_generator';
import { TypeScriptCodeFormatter } from './TypeScriptCodeFormatter';
import { AetherDslMeta, AetherDslMetaMap, IncludeResolver } from './aether_protocol_core';

/**
 * @class AetherProtocolGenerator
 * @description Standalone Generator for generating TypeScript code from ADSL YAML files.
 * This class scans a directory for `.adsl.yaml` or `.adsl.json` files,
 * aggregates all definitions, and uses `aether_protocol_generator` to
 * produce the final `aether_api.ts` and `aether_api_impl.ts` files.
 */
export class AetherProtocolGenerator {
    /**
     * @private
     * @readonly
     * @type {TypeScriptCodeFormatter}
     * @description Instance of the code formatter.
     */
    private readonly formatter = new TypeScriptCodeFormatter();

    /**
     * @private
     * @readonly
     * @type {AetherDslMetaMap}
     * @description A map to store all aggregated DSL metadata, keyed by baseName.
     */
    private readonly allDslMeta: AetherDslMetaMap = {};

    /**
     * @private
     * @readonly
     * @type {Set<string>}
     * @description A set to track already processed DSL file paths to prevent recursion.
     */
    private readonly processedDslPaths: Set<string> = new Set();

    /**
     * @public
     * @async
     * @function generate
     * @description Main entry point for the generation process.
     * Finds, loads, and processes all DSL files, then writes the generated
     * TypeScript files to the disk.
     */
    async generate() {
        console.log('Starting Aether protocol generation...');

        const srcDir = path.resolve(process.cwd(), 'src');

        // 1. Find all ADSL YAML files
        const dslFiles = this.findDslFiles(srcDir);

        if (dslFiles.length === 0) {
            throw new Error('No ADSL YAML files found in src directory');
        }
        console.log(`Found ${dslFiles.length} DSL files:`, dslFiles.map(f => path.basename(f)));

        // 2. Aggregate metadata from all files and their includes into allDslMeta
        for (const filePath of dslFiles) {
            await this.loadAllMetaRecursively(filePath);
        }

        // Use the first file (by convention) as the "primary" for generation.
        const primaryFilePath = dslFiles[0];
        const primaryBaseName = path.basename(primaryFilePath).replace(/\.adsl\.(yaml|json)$/, '');

        if (!this.allDslMeta[primaryBaseName]) {
             throw new Error('Failed to load primary DSL metadata.');
        }

        // 3. Call the unified generator with the aggregated metadata
        console.log('Running unified code generation...');
        const generatedFiles = await generateAetherProtocol(
            this.allDslMeta,
            this.createAggregatedResolver(),
            primaryBaseName
        );

        // 4. Write *all* generated files
        console.log(`Writing ${Object.keys(generatedFiles).length} generated file(s)...`);

        if (Object.keys(generatedFiles).length === 0) {
            throw new Error('Generator returned no files.');
        }

        // Iterate over all files (aether_api.ts and aether_api_impl.ts)
        for (const [fileName, fileContent] of Object.entries(generatedFiles)) {
            if (!fileContent) {
                console.warn(`Warning: Generator returned empty content for ${fileName}. Skipping.`);
                continue;
            }

            // Determine the output path for *each* file
            const currentOutputFile = path.resolve(srcDir, fileName);

            // Format and write
            fs.writeFileSync(currentOutputFile, this.formatter.format(fileContent));
            console.log(`Successfully generated and overwrote: ${currentOutputFile}`);
        }
    }

    /**
     * @private
     * @async
     * @function loadMetaFromFile
     * @param {string} filePath - The absolute path to the DSL file.
     * @returns {Promise<AetherDslMeta>} The parsed metadata object.
     */
    private async loadMetaFromFile(filePath: string): Promise<AetherDslMeta> {
        const dslText = fs.readFileSync(filePath, 'utf8');
        const dslFormat = filePath.endsWith('.json') ? 'json' : 'yaml';
        return dslFormat === 'json'
            ? JSON.parse(dslText) as AetherDslMeta
            : yaml.load(dslText) as AetherDslMeta;
    }

    /**
     * @private
     * @async
     * @function loadAllMetaRecursively
     * @description Loads a DSL file and all its `includes` recursively, populating `this.allDslMeta`.
     * @param {string} filePath - The path to the DSL file to load.
     */
    private async loadAllMetaRecursively(filePath: string): Promise<void> {
        // Ensure path is absolute and normalized for the Set
        const normalizedFilePath = path.resolve(filePath);
        if (this.processedDslPaths.has(normalizedFilePath)) return;

        const baseName = path.basename(normalizedFilePath).replace(/\.adsl\.(yaml|json)$/, '');
        this.processedDslPaths.add(normalizedFilePath);

        const meta = await this.loadMetaFromFile(normalizedFilePath);

        // Add 'api' if 'services' exists (for compatibility)
        if (meta.services) {
             meta.api = meta.services;
        }

        this.allDslMeta[baseName] = meta;
        meta.baseName = baseName;

        const includes = meta.includes || [];
        for (const includeName of includes) {
            const includeBaseDir = path.dirname(normalizedFilePath);
            const possibleExtensions = ['.adsl.yaml', '.adsl.json'];
            let foundInclude = false;

            for (const ext of possibleExtensions) {
                const includePath = path.resolve(includeBaseDir, `${includeName}${ext}`);
                if (fs.existsSync(includePath)) {
                    await this.loadAllMetaRecursively(includePath);
                    foundInclude = true;
                    break;
                }
            }

            if (!foundInclude) {
                 // Attempt to find the file in other root DSL directories (e.g., as a sibling)
                 const rootDir = path.dirname(normalizedFilePath);

                 for (const ext of possibleExtensions) {
                     const siblingPath = path.resolve(rootDir, `../${includeName}/${includeName}${ext}`); // Try to find as a neighbor
                     const commonPath = path.resolve(rootDir, `${includeName}${ext}`); // Try to find in the same folder

                     if (fs.existsSync(commonPath)) {
                         await this.loadAllMetaRecursively(commonPath);
                         foundInclude = true;
                         break;
                     }
                     if (fs.existsSync(siblingPath)) {
                         await this.loadAllMetaRecursively(siblingPath);
                         foundInclude = true;
                         break;
                     }
                 }

                 if (!foundInclude) {
                    console.warn(`Warning: Could not resolve include '${includeName}' from file ${normalizedFilePath}`);
                 }
            }
        }
    }

    /**
     * @private
     * @function createAggregatedResolver
     * @description Creates an IncludeResolver function that resolves includes
     * from the already aggregated `this.allDslMeta` map.
     * @returns {IncludeResolver} An async function to resolve include names.
     */
    private createAggregatedResolver(): IncludeResolver {
        return async (includeName: string): Promise<AetherDslMeta> => {
            const normalizedName = includeName.replace(/\.adsl\.(yaml|json)$/, '');
            const meta = this.allDslMeta[normalizedName];
            if (!meta) {
                 throw new Error(`Aggregated metadata for '${includeName}' (normalized: '${normalizedName}') not found.`);
            }
            return meta;
        };
    }

    /**
     * @private
     * @function findDslFiles
     * @description Recursively scans a directory for `.adsl.yaml` and `.adsl.json` files.
     * @param {string} dir - The directory to start scanning from.
     * @returns {string[]} An array of absolute paths to the found DSL files.
     */
    private findDslFiles(dir: string): string[] {
        const files: string[] = [];

        function scanDirectory(currentDir: string) {
            const items = fs.readdirSync(currentDir);

            for (const item of items) {
                const fullPath = path.join(currentDir, item);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    if (item === 'node_modules' || item.startsWith('.')) continue;
                    scanDirectory(fullPath);
                } else if (item.endsWith('.adsl.yaml') || item.endsWith('.adsl.json')) {
                    files.push(fullPath);
                }
            }
        }

        scanDirectory(dir);
        return files;
    }
}

// ==================== EXECUTABLE PART ====================

/**
 * This block executes if the file is run directly from the command line
 * (e.g., `node AetherProtocolPlugin.ts`).
 */
if (require.main === module) {
    const generator = new AetherProtocolGenerator();
    generator.generate().catch(error => {
        console.error('Generation failed:', error);
        process.exit(1);
    });
}