import { TestInfo } from '@playwright/test';

type GetScreenshotNameArgs = {
  testInfo: TestInfo;
  name: string;
};

export const getScreenshotName = ({
  name,
  testInfo,
}: GetScreenshotNameArgs): string[] => {
  const normalizedTitle = testInfo.title.replace(' ', '_');
  return [normalizedTitle, `${name}.png`];
};
