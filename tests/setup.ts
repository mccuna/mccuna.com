import { test as playwrightTest } from '@playwright/test';
import { MockAgent, setGlobalDispatcher } from 'undici';

interface TestFixtures {
  mockAgent: MockAgent;
}

interface WorkerFixtures {
  port: number;
}

export const test = playwrightTest.extend<TestFixtures, WorkerFixtures>({
  // Use prefers-reduced-motion to disable animations
  page: ({ page }, use) => {
    page.emulateMedia({
      reducedMotion: 'reduce',
    });

    use(page);
  },

  // Setup mock client for requests initiated by the Worker
  // eslint-disable-next-line no-empty-pattern
  mockAgent: async ({}, use) => {
    const mockAgent = new MockAgent();

    setGlobalDispatcher(mockAgent);

    await use(mockAgent);
  },
});

const { expect } = test;
export { expect };
