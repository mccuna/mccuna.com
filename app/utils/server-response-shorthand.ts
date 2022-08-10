import { json, redirect } from '@remix-run/cloudflare';
import { TypedResponse } from '@remix-run/react/dist/components';

export const badRequest = <TData>(data: TData): TypedResponse<TData> =>
  json(data, { status: 400 });

export const temporaryRedirect = (url: string): TypedResponse<never> => {
  return redirect(url, { status: 307 });
};

export const permanentRedirect = (url: string): TypedResponse<never> => {
  return redirect(url, { status: 308 });
};
