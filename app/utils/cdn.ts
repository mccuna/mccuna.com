import { ImageVariant } from '~/components/image/image-variant';
import { useRootLoaderData } from './use-match-loader-data';

type GetImageCdnUrlArgs = {
  cdnPath: string;
  variant: ImageVariant;
};

export const useImageCdn = () => {
  const { ENV } = useRootLoaderData();

  const getImageCdnUrl = ({ cdnPath, variant }: GetImageCdnUrlArgs) => {
    // In production serve the images from the same domain
    if (process.env.NODE_ENV === 'production') {
      return `/cdn-cgi/imagedelivery/${ENV.CLOUDFLARE_ACCOUNT_HASH}/${cdnPath}/${variant}`;
    }

    return `https://imagedelivery.net/${ENV.CLOUDFLARE_ACCOUNT_HASH}/${cdnPath}/${variant}`;
  };

  return { getImageCdnUrl };
};
