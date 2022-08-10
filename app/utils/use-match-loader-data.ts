import { useMatches } from '@remix-run/react';
import { handle as rootHandle } from '~/root';
import { RootLoaderData } from '~/root.loader';

export const useMatchLoaderData = <LoaderData>(
  handleId: string,
): LoaderData => {
  const matches = useMatches();

  const handleMatch = matches.find((match) => match.id === handleId);

  if (!handleMatch) {
    throw new Error(`No match found for id: ${handleId}`);
  }

  return handleMatch.data as LoaderData;
};

export const useRootLoaderData = (): RootLoaderData =>
  useMatchLoaderData<RootLoaderData>(rootHandle.id);
