export type Env = {
  __STATIC_CONTENT: string;
  __STATIC_CONTENT_MANIFEST: string;
  VERIFIER_MEETCHOPRA_KEY: string;
  MAILERSEND_API_KEY: string;
  HCAPTCHA_SITE_KEY: string;
  HCAPTCHA_SITE_SECRET: string;
  FAUNA_SECRET: string;
  FAUNA_DOMAIN: string;
  USE_CUSTOM_DOMAIN_FOR_IMAGES: boolean;
  KV_CONTENT: KVNamespace;
};