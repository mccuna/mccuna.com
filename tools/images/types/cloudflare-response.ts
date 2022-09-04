export type CloudflareResponse = {
  result: {
    id: string;
    filename: string;
    uploaded: string; // datetime in ISO
    requireSignedURLs: boolean;
    variants: string[];
  };
  result_info: string | null;
  success: boolean;
  errors: string[];
  messages: string[];
};
