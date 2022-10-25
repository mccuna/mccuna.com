import * as dotenv from 'dotenv';
import { uploadImagesToCloudflare } from '../tools/images/upload-to-cloudflare';

dotenv.config();

const imagesDirectoryPath = './images';

uploadImagesToCloudflare({
  dirName: imagesDirectoryPath,
  extensionsToInclude: ['.webp', '.png', '.svg'],
  localPathPrefix: `${imagesDirectoryPath}/`,
});
