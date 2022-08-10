export type MailersendMail = {
  from: {
    email: string;
    name?: string;
  };
  reply_to?: {
    email: string;
    name?: string;
  };
  to: {
    email: string;
    name: string;
  }[];
  subject: string;
  html: string;
  variables?: {
    email?: string;
    substitutions: {
      var: string;
      value: string;
    }[];
  }[];
};
