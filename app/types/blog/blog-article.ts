import { HtmlMetaDescriptor } from '@remix-run/react';

export type BlogArticle = {
  meta: HtmlMetaDescriptor & {
    title: string;
    description: string;
  };
  html: string;
};
