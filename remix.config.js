/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'cloudflare-workers',
  server: './server.js',
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
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
