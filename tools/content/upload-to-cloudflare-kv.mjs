// @ts-check
import { compile } from '@mdx-js/mdx';
import fs from 'fs';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import invariant from 'tiny-invariant';

/**
 * @param {Object} args
 * @param {string} args.dirPath
 * @param {string} args.outputDirPath
 */
export const compileMdx = async ({ dirPath, outputDirPath }) => {
  invariant(fs.existsSync(dirPath), `Directory does not exist: ${dirPath}`);
  invariant(!!outputDirPath, 'outputDirPath is required');
  invariant(
    typeof outputDirPath === 'string',
    'outputDirPath must be a string',
  );

  const dirFiles = await fs.promises.readdir(dirPath, {
    withFileTypes: true,
  });

  const compileMdxPromisesList = dirFiles
    .filter((file) => file.isFile() && file.name.endsWith('.mdx'))
    .map((fileDirent) =>
      compileMdxFile({ dirPath, outputDirPath, fileDirent }),
    );

  await Promise.all(compileMdxPromisesList);
};

/**
 * @param {Object} args
 * @param {string} args.dirPath
 * @param {string} args.outputDirPath
 * @param {fs.Dirent} args.fileDirent
 */
const compileMdxFile = async ({ dirPath, outputDirPath, fileDirent }) => {
  const filePath = path.join(dirPath, fileDirent.name);
  const file = await fs.promises.readFile(filePath);

  const compiledFile = await compile(file, {
    rehypePlugins: [rehypeHighlight],
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  });

  if (!fs.existsSync(outputDirPath)) {
    await fs.promises.mkdir(outputDirPath);
  }

  const fileNameWithoutExtension = fileDirent.name.replace('.mdx', '');
  // TODO: minify the content
  await fs.promises.writeFile(
    `./content/build/${fileNameWithoutExtension}.js`,
    compiledFile.value,
  );
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

const getContentFiles = async () => {};

export {};
