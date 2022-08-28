export const getPageTitle = (pageTitle: string) => {
  if (!pageTitle) {
    return 'mc cună';
  }

  return `${pageTitle} | mc cună`;
};

export const removeTrailingSlash = (path: string) => {
  if (path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
};

type GetSocialMediaMetaTagsArgs = {
  origin: string;
  url: string;
};
export const getSocialMediaMetaTags = ({
  origin,
  url,
}: GetSocialMediaMetaTagsArgs) => {
  const socialMediaImageUrl = `${origin}/images/me-social-tag-image.webp`;

  return {
    'og:title': 'mc cună',
    'og:image': socialMediaImageUrl,
    'og:type': 'website',
    'og:url': `${origin}${url}`,
    'twitter:title': 'mc cună',
    'twitter:description': "mc cună's personal website",
    'twitter:card': 'summary',
    'twitter:image': socialMediaImageUrl,
    'twitter:alt': 'mc cună',
  };
};
