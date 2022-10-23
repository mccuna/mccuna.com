// @ts-check
import * as dotenv from 'dotenv';
import invariant from 'tiny-invariant';
import {
  uploadToCloudflareKV,
  uploadToMiniflareKV,
} from '../tools/content/upload-to-cloudflare-kv.mjs';

const env = process.argv
  .find((arg) => arg.startsWith('--env='))
  ?.replace('--env=', '');

const knownValues = ['dev', 'staging', 'prod'];

if (!env) {
  console.error(`--env arg is missing. Sample --env=${knownValues.join('/')}`);
  process.exit(1);
}

if (!knownValues.includes(env)) {
  console.error(
    `Invalid env value: ${env}. Possible values: ${knownValues.join(', ')}`,
  );
  process.exit(1);
}

dotenv.config();

const buildDir = `./content/build`;

if (env === 'dev') {
  console.log('🔥 ⏳ Uploading to Miniflare KV...');
  await uploadToMiniflareKV({ buildDir });
  console.log('🔥 ✅ Successfully uploaded to Miniflare KV...');

  process.exit(0);
}

console.log(`☁ ⏳ Uploading to Cloudflare ${env} KV...`);

const envVarKey = `CLOUDFLARE_CONTENT_KV_NAMESPACE_ID_${env.toUpperCase()}`;
const namespaceId = process.env[envVarKey];
invariant(namespaceId, `${envVarKey} is required`);

const isCloudflareUploadSuccessful = await uploadToCloudflareKV({
  buildDir,
  namespaceId,
});
if (isCloudflareUploadSuccessful) {
  console.log(`☁ ✅ Successfully uploaded to Cloudflare ${env} KV...`);
} else {
  console.log(`☁ ❌ Failed to upload to Cloudflare ${env} KV...`);
}
