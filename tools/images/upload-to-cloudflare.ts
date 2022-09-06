/* eslint-disable no-console */
import fs, { Dirent } from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import invariant from 'tiny-invariant';
import { CloudflareResponse } from './types/cloudflare-response';

type SyncImagesDirWithCloudflareArgs = {
  dirName: string;
  parentPath?: string;
  extensionsToInclude: string[];
  localPathPrefix: string;
};

export const syncImagesDirWithCloudflare = async ({
  dirName,
  parentPath,
  extensionsToInclude,
  localPathPrefix,
}: SyncImagesDirWithCloudflareArgs) => {
  const dirPath = path.join(parentPath || '', dirName);
  invariant(fs.existsSync(dirPath), `${dirPath} doesn't exist.`);

  const dirItems = await fsPromises.readdir(dirPath, {
    withFileTypes: true,
  });

  const { directories, files } = dirItems.reduce(
    (acc, currentValue) => {
      if (currentValue.isDirectory()) {
        acc.directories.push(currentValue);
        return acc;
      }

      if (extensionsToInclude.includes(path.extname(currentValue.name))) {
        acc.files.push(currentValue);
      }

      return acc;
    },
    {
      directories: [] as Dirent[],
      files: [] as Dirent[],
    },
  );

  await Promise.all(
    files.map((file) =>
      syncImageWithCloudflare({
        fileName: file.name,
        parentPath: dirPath,
        localPathPrefix,
      }),
    ),
  );

  for (const directory of directories) {
    /* Go through each folder 1 at a time to prevent sending too 
    many requests to cloudflare */
    // eslint-disable-next-line no-await-in-loop
    await syncImagesDirWithCloudflare({
      dirName: directory.name,
      parentPath: dirPath,
      extensionsToInclude,
      localPathPrefix,
    });
  }
};

type SyncImageWithCloudflareArgs = {
  fileName: string;
  parentPath: string;
  localPathPrefix: string;
};

export const syncImageWithCloudflare = async ({
  fileName,
  parentPath,
  localPathPrefix,
}: SyncImageWithCloudflareArgs) => {
  const localFilePath = path.join(parentPath, fileName);
  invariant(fs.existsSync(localFilePath), `${localFilePath} doesn't exist.`);

  const normalizedLocalPathPrefix = path.normalize(localPathPrefix);

  /* The normalized paths have double back-slashes but we 
  need single front-slashes for the CDN path */
  const cdnPath = localFilePath
    .replace(normalizedLocalPathPrefix, '')
    .replace('\\', '/');

  let fileContent: Buffer;

  try {
    fileContent = await fsPromises.readFile(localFilePath);
  } catch (err) {
    console.error(err);
    return;
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1`;

  // https://developers.cloudflare.com/images/cloudflare-images/upload-images/custom-id/
  const formData = new FormData();
  formData.append('id', cdnPath);
  formData.append('file', new Blob([fileContent]), cdnPath);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_IMAGES_API_TOKEN}`,
      },
    });

    const responseJson = await response.text();

    if (response.status !== 200) {
      if (responseJson.includes('ERROR 5409')) {
        printResourceAlreadyExistsMsg(cdnPath);
        return;
      }

      console.error(responseJson);
      return;
    }

    const cloudflareResponse = JSON.parse(responseJson) as CloudflareResponse;
    if (!cloudflareResponse.success) {
      console.error(responseJson);
      return;
    }

    printUploadSuccessfulMsg(cloudflareResponse.result.id);
  } catch (err) {
    console.error(err);
  }
};

const printResourceAlreadyExistsMsg = (cdnPath: string) => {
  console.log(`${String.fromCodePoint(0x1f4a4)} ${cdnPath} already exists.`);
};

const printUploadSuccessfulMsg = (cdnPath: string) => {
  console.log(
    `${String.fromCodePoint(0x2705)} ${cdnPath} uploaded successfully`,
  );
};
