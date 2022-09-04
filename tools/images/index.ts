import * as dotenv from 'dotenv';
import { syncImagesDirWithCloudflare } from './upload-to-cloudflare';

dotenv.config();

const imagesDirectoryPath = './public/images';

syncImagesDirWithCloudflare({
  dirName: imagesDirectoryPath,
  extensionsToInclude: ['.webp', '.png', '.svg'],
  localPathPrefix: `${imagesDirectoryPath}/`,
});
