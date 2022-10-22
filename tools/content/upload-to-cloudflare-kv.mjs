// @ts-check
import mdx from '@mdx-js/esbuild';
import esbuild from 'esbuild';
import fs from 'fs';
import { Miniflare } from 'miniflare';
import path from 'path';
import { renderToString } from 'react-dom/server';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import invariant from 'tiny-invariant';
import { fileURLToPath } from 'url';

const tempDirectory = './temp';

/**
 * @param {Object} args
 * @param {string} args.dirPath
 */
export const compileMdx = async ({ dirPath }) => {
  invariant(fs.existsSync(dirPath), `Directory does not exist: ${dirPath}`);

  const dirFiles = await fs.promises.readdir(dirPath, {
    withFileTypes: true,
  });

  const mdxFileDirentsList = dirFiles.filter(
    (file) => file.isFile() && file.name.endsWith('.mdx'),
  );

  await esbuild.build({
    entryPoints: mdxFileDirentsList.map((fileDirent) =>
      path.join(dirPath, fileDirent.name),
    ),
    format: 'esm',
    outdir: getTempDirPath(),
    outExtension: { '.js': '.mjs' },
    plugins: [
      mdx({
        rehypePlugins: [rehypeHighlight],
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    ],
  });
};

/**
 * @param {Object} args
 * @param {string} args.outputDirPath
 */
export const compileJsxToJson = async ({ outputDirPath }) => {
  if (!fs.existsSync(outputDirPath)) {
    await fs.promises.mkdir(outputDirPath);
  }

  const compiledFilePathsList = await fs.promises.readdir(getTempDirPath());
  const tempDirPath = getTempDirPath();

  const compileJsxToJsonPromises = compiledFilePathsList.map(
    async (compiledFilePath) => {
      const filePath = path.join(tempDirPath, compiledFilePath);

      const fileModule = await import(`file:\\\\\\${filePath}`);
      const { default: Component, meta } = fileModule;

      const componentReactObj = Component();

      const html = renderToString(componentReactObj);

      const fileContent = JSON.stringify({ meta, html });

      const fileNameWithoutExt = path.basename(compiledFilePath, '.mjs');
      const outputFilePath = path.join(
        outputDirPath,
        `${fileNameWithoutExt}.json`,
      );
      await fs.promises.writeFile(outputFilePath, fileContent);
    },
  );

  await Promise.all(compileJsxToJsonPromises);

  await fs.promises.rmdir(tempDirPath, { recursive: true });
};

/**
 * @param {Object} args
 * @param {string} args.buildDir
 * @param {string} args.namespaceId
 */
export const uploadToCloudflareKV = async ({ buildDir, namespaceId }) => {
  const kvEntries = await getKvEntries({ buildDir });

  const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${namespaceId}/bulk`;

  invariant(
    process.env.CLOUDFLARE_EDIT_CONTENT_API_TOKEN?.length,
    'CLOUDFLARE_EDIT_CONTENT_API_TOKEN is required',
  );

  const body = JSON.stringify(kvEntries);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.CLOUDFLARE_EDIT_CONTENT_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body,
  });

  const responseBody = await response.json();
  return responseBody?.success;
};

/**
 * @param {Object} args
 * @param {string} args.buildDir
 */
export const uploadToMiniflareKV = async ({ buildDir }) => {
  const mf = new Miniflare({
    modules: true,
    wranglerConfigPath: true,
    envPath: true,
    packagePath: true,
    scriptPath: 'dist/worker.mjs',
  });

  const kvNamespace = await mf.getKVNamespace('KV_CONTENT');
  const kvEntriesList = await getKvEntries({ buildDir });

  const kvPutPromises = kvEntriesList.map(async (kvEntry) => {
    await kvNamespace.put(kvEntry.key, kvEntry.value);
  });

  await Promise.all(kvPutPromises);
};

const getTempDirPath = () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  return path.join(__dirname, tempDirectory);
};

/**
 * @param {Object} args
 * @param {string} args.buildDir
 */
const getKvEntries = async ({ buildDir }) => {
  const fileNamesList = await fs.promises.readdir(buildDir);

  return await Promise.all(
    fileNamesList.map(async (fileName) => {
      const fileContent = await fs.promises.readFile(
        path.join(buildDir, fileName),
        {
          encoding: 'utf-8',
        },
      );
      return {
        key: fileName,
        value: fileContent,
      };
    }),
  );
};
