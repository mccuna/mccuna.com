import { json, redirect } from '@remix-run/cloudflare';

export const badRequest = <TData>(
  data: TData,
): ReturnType<typeof json<TData>> => json(data, { status: 400 });

export const temporaryRedirect = (url: string): ReturnType<typeof redirect> => {
  return redirect(url, { status: 307 });
};

export const permanentRedirect = (url: string): ReturnType<typeof redirect> => {
  return redirect(url, { status: 308 });
};
