declare global {
  // https://verifier.meetchopra.com/ api key
  const VERIFIER_MEETCHOPRA_KEY: string;
  const MAILERSEND_API_KEY: string;
  const HCAPTCHA_SITE_KEY: string;
  const HCAPTCHA_SITE_SECRET: string;
  const FAUNA_SECRET: string;
  const FAUNA_DOMAIN: string;

  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      NODE_ENV?: 'development' | 'production' | 'test';
    }
  }
}

// workaround for "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations"
export {};
