/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'cloudflare-workers',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: [
    '**/.*',
    '**/*.specs.md',
    '**/*.loader.ts',
    '**/*.action.ts',
    '**/*.meta.ts',
    '**/*.error-boundary.tsx',
    '**/*.decision.md',
    '**/*.links.ts',
    '**/*.handle.ts',
  ],
  // assetsBuildDirectory: 'build',
  // serverBuildPath: 'build',
  // publicPath: '/build/_assets/',
  // appDirectory: "app",
  // serverBuildPath: "build/index.js",
};
