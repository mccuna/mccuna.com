import { test as playwrightTest } from '@playwright/test';
import { Miniflare } from 'miniflare';
import { MockAgent, setGlobalDispatcher } from 'undici';
import { mockDate } from './utils/mock-date';

interface TestFixtures {
  mockAgent: MockAgent;
}

interface WorkerFixtures {
  mf: Miniflare;
  port: number;
}

export const test = playwrightTest.extend<TestFixtures, WorkerFixtures>({
  // Assign a unique "port" for each worker process
  port: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use, workerInfo) => {
      await use(3001 + workerInfo.workerIndex);
    },
    { scope: 'worker' },
  ],

  // Set baseUrl
  baseURL: ({ port }, use) => {
    use(`http://localhost:${port}`);
  },

  // Setup mock client for requests initiated by the Worker
  // eslint-disable-next-line no-empty-pattern
  mockAgent: async ({}, use) => {
    const mockAgent = new MockAgent();

    setGlobalDispatcher(mockAgent);

    await use(mockAgent);
  },

  // Miniflare instance
  mf: [
    async ({ port }, use) => {
      // mocks Date in the tests
      mockDate();

      const mf = new Miniflare({
        modules: true,
        wranglerConfigPath: true,
        envPath: true,
        packagePath: true,
        bindings: {},
        port,
        scriptPath: 'dist/worker.mjs',
      });

      // Start the server
      const server = await mf.startServer();

      // Use the server in the tests
      await use(mf);

      // Cleanup
      await new Promise<void>((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
      });
    },
    {
      scope: 'worker',
      auto: true,
    },
  ],
});

const { expect } = test;
export { expect };
