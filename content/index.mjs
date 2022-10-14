// @ts-check
import * as dotenv from 'dotenv';
import { uploadToCloudflareKV } from '../tools/content/upload-to-cloudflare-kv.mjs';

dotenv.config();

// compileMdx({ dirPath: './content', outputDirPath: './content/build' });
uploadToCloudflareKV({ buildDir: './content/build' });
