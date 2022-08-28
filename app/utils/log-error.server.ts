import { query as q } from 'faunadb';
import { executeQuery } from '~/helpers/fauna/execute-query';

export const logError = async (errorLog: unknown): Promise<void> => {
  await executeQuery({
    clientConfig: {
      secret: FAUNA_SECRET,
      domain: FAUNA_DOMAIN,
      scheme: 'https',
    },
    query: q.Create(q.Collection('errors'), {
      data: {
        error: {
          datetime: new Date().toISOString(),
          value: typeof errorLog === 'object' ? { ...errorLog } : errorLog,
        },
      },
    }),
  });
};

export const isJSError = (error: unknown): error is Error => {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  // duck-typing ftw
  return 'name' in error && 'message' in error;
};
