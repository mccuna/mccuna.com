declare global {
  // https://verifier.meetchopra.com/ api key
  const VERIFIER_MEETCHOPRA_KEY: string;
  const MAILERSEND_API_KEY: string;
}

// workaround "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations"
export {};
