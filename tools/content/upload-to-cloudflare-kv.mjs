// @ts-check
import mdx from '@mdx-js/esbuild';
import esbuild from 'esbuild';
import fs from 'fs';
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
export const renderJsxToHtml = async ({ outputDirPath }) => {
  if (!fs.existsSync(outputDirPath)) {
    await fs.promises.mkdir(outputDirPath);
  }

  const compiledFilePathsList = await fs.promises.readdir(getTempDirPath());
  const tempDirPath = getTempDirPath();

  const renderJsxToHtmlPromises = compiledFilePathsList.map(
    async (compiledFilePath) => {
      const filePath = path.join(tempDirPath, compiledFilePath);

      const fileModule = await import(`file:\\\\\\${filePath}`);
      const { default: Component, meta } = fileModule;

      const componentReactObj = Component();

      const html = renderToString(componentReactObj);

      let newModuleContents = '';
      newModuleContents += `export const html = ${JSON.stringify(html)};\n`;
      newModuleContents += `export const meta = {\n`;
      Object.entries(meta).forEach(([key, value]) => {
        newModuleContents += `  ${key}: "${value}",\n`;
      });
      newModuleContents += `};\n`;

      const transformResult = await esbuild.transform(newModuleContents, {
        keepNames: true,
        minify: true,
      });

      const outputFilePath = path.join(outputDirPath, compiledFilePath);
      await fs.promises.writeFile(outputFilePath, transformResult.code);
    },
  );

  await Promise.all(renderJsxToHtmlPromises);
};

/**
 * @param {Object} args
 * @param {string} args.buildDir
 */
export const uploadToCloudflareKV = async ({ buildDir }) => {
  const fileDirentsList = await fs.promises.readdir(buildDir, {
    withFileTypes: true,
  });
  const fileContentsList = await Promise.all(
    fileDirentsList.map(async (fileDirent) => {
      const fileContent = await fs.promises.readFile(
        path.join(buildDir, fileDirent.name),
        {
          encoding: 'utf-8',
        },
      );
      return {
        key: fileDirent.name,
        value: fileContent,
      };
    }),
  );

  const namespaceId = '5ce840d722e24e149be86d98ac5decf5';
  const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${namespaceId}/bulk`;

  invariant(
    process.env.CLOUDFLARE_EDIT_CONTENT_API_TOKEN?.length,
    'CLOUDFLARE_EDIT_CONTENT_API_TOKEN is required',
  );

  const body = JSON.stringify(fileContentsList);

  // TODO: copy to .mf/kv too
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.CLOUDFLARE_EDIT_CONTENT_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body,
  });

  // TODO: Pretty print the response
  const responseJson = await response.json();
};

const getTempDirPath = () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  return path.join(__dirname, tempDirectory);
};

const getContentFiles = async () => {};

export {};
