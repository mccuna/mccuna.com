import { ImageVariant } from '~/components/image/image-variant';
import { useRootLoaderData } from './use-match-loader-data';

type GetImageCdnUrlArgs = {
  cdnPath: string;
  variant: ImageVariant;
};

export const useImageCdn = () => {
  /* don't destructure as this is going to be undefined when rendering the
   * root ErrorBoundary and CatchBoundary
   */
  const rootLoaderData = useRootLoaderData();
  const { ENV } = rootLoaderData ?? { ENV: null };

  const getImageCdnUrl = ({ cdnPath, variant }: GetImageCdnUrlArgs) => {
    // In production serve the images from the same domain
    if (ENV?.USE_CUSTOM_DOMAIN_FOR_IMAGES !== 'true') {
      return `https://imagedelivery.net/${ENV?.CLOUDFLARE_ACCOUNT_HASH}/${cdnPath}/${variant}`;
    }

    return `/cdn-cgi/imagedelivery/${ENV?.CLOUDFLARE_ACCOUNT_HASH}/${cdnPath}/${variant}`;
  };

  return { getImageCdnUrl };
};
