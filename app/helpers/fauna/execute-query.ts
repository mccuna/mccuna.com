import { Client, ClientConfig, Expr, MetricsResponse } from 'faunadb';
import { QueryResult } from './types';

type WarningThreshold = {
  readOps: number;
  writeOps: number;
  computeOps: number;
};

type ExecuteQueryArgs = {
  query: Expr;
  clientConfig: ClientConfig;
  customClient?: Client;
  customWarningThreshold?: WarningThreshold;
};

export const executeQuery = async <TReturn extends Record<string, unknown>>({
  customClient,
  clientConfig,
  query,
  customWarningThreshold,
}: ExecuteQueryArgs): Promise<QueryResult<TReturn> | null> => {
  try {
    const client = customClient || new Client(clientConfig);
    const { metrics, value } = await client.queryWithMetrics<
      QueryResult<TReturn>
    >(query);

    const warningThreshold = customWarningThreshold ?? {
      computeOps: 1,
      readOps: 1,
      writeOps: 1,
    };
    checkWarningThreshold(metrics, warningThreshold);

    return value;
  } catch (err) {
    return null;
  }
};

const checkWarningThreshold = (
  metrics: MetricsResponse['metrics'],
  warningThreshold: WarningThreshold,
): void => {
  const consoleMsgStyle = 'color:#f97316;';
  if (metrics['x-compute-ops'] > warningThreshold.computeOps) {
    // eslint-disable-next-line no-console
    console.warn(
      `%cQuery has ${metrics['x-compute-ops']} compute ops`,
      consoleMsgStyle,
    );
  }
  if (metrics['x-byte-read-ops'] > warningThreshold.readOps) {
    // eslint-disable-next-line no-console
    console.warn(
      `, consoleMsgStyleQuery has ${metrics['x-byte-read-ops']} read ops`,
    );
  }
  if (metrics['x-byte-write-ops'] > warningThreshold.writeOps) {
    // eslint-disable-next-line no-console
    console.warn(
      `Query has ${metrics['x-byte-write-ops']} write ops`,
      consoleMsgStyle,
    );
  }
};
