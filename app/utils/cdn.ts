import { ImageVariant } from '~/components/image/image-variant';
import { appConfig } from '~/constants/app-config';
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
  const getImageCdnUrl = ({ cdnPath, variant }: GetImageCdnUrlArgs) => {
    // In production serve the images from the same domain
    if (!rootLoaderData?.ENV.USE_CUSTOM_DOMAIN_FOR_IMAGES) {
      return `https://imagedelivery.net/${appConfig.cloudflareAccountHash}/${cdnPath}/${variant}`;
    }

    return `/cdn-cgi/imagedelivery/${appConfig.cloudflareAccountHash}/${cdnPath}/${variant}`;
  };

  return { getImageCdnUrl };
};
