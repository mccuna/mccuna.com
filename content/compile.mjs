// @ts-check
import * as dotenv from 'dotenv';
import {
  compileJsxToJson,
  compileMdx,
} from '../tools/content/upload-to-cloudflare-kv.mjs';

dotenv.config();

const buildDir = `./content/build`;

console.log('🔨 ⏳ Compiling MDX...');
await compileMdx({
  dirPath: './content',
});
console.log('🔨 ✅ Successfully compiled MDX.');

console.log('🎨 ⏳ Rendering JSX to HTML...');
await compileJsxToJson({
  outputDirPath: buildDir,
});
console.log('🎨 ✅ Successfully rendered JSX to HTML...');
