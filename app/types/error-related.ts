export type ErrorBoundaryProps = {
  error: Error;
};

export type ErrorLog = {
  name: string;
  message: string;
  pathname?: string;
  hash?: string;
  search?: string;
};
