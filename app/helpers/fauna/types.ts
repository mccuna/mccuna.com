import { values } from 'faunadb';

export type FaunaRefId = values.Ref['id'];

export type WithRef<TDocument extends Record<string, unknown>> = TDocument & {
  ref: FaunaRefId;
};

export type QueryResult<TDocument extends Record<string, unknown>> = {
  ref: FaunaRefId;
  data: TDocument;
  ts: number;
};
