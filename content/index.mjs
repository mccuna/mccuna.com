// @ts-check
import * as dotenv from 'dotenv';
import {
  compileJsxToJson,
  compileMdx,
} from '../tools/content/upload-to-cloudflare-kv.mjs';

dotenv.config();

console.log('🔨 ⏳ Compiling MDX...');
await compileMdx({
  dirPath: './content',
});
console.log('🔨 ✅ Successfully compiled MDX.');

console.log('🎨 ⏳ Rendering JSX to HTML...');
await compileJsxToJson({
  outputDirPath: './content/build',
});
console.log('🎨 ✅ Successfully rendered JSX to HTML...');

// console.log('☁ ⏳ Uploading to Cloudflare KV...');
// uploadToCloudflareKV({ buildDir: './content/build' });
// console.log('☁ ✅ Successfully uploaded to Cloudflare KV...');
