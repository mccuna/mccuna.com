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
    '**/*.catch-boundary.tsx',
    '**/*.decision.md',
    '**/*.links.ts',
    '**/*.handle.ts',
  ],
  mdx: async () => {
    const [rehypeHighlight] = await Promise.all([
      import('rehype-highlight').then((mod) => mod.default),
    ]);

    return {
      rehypePlugins: [rehypeHighlight],
    };
  },
  // assetsBuildDirectory: 'build',
  // serverBuildPath: 'build',
  // publicPath: '/build/_assets/',
  // appDirectory: "app",
  // serverBuildPath: "build/index.js",
};
