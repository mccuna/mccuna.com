import { ImageVariant } from '~/components/image/image-variant';

type GetImageCdnUrlArgs = {
  cdnPath: string;
  variant: ImageVariant;
};

export const useImageCdn = () => {
  // const { ENV } = useRootLoaderData();

  const getImageCdnUrl = ({ cdnPath, variant }: GetImageCdnUrlArgs) => {
    // In production serve the images from the same domain
    if (process.env.NODE_ENV === 'production') {
      return `/cdn-cgi/imagedelivery/0uj9SUnHui6vrXgyuOODuw/${cdnPath}/${variant}`;
    }

    return `https://imagedelivery.net/0uj9SUnHui6vrXgyuOODuw/${cdnPath}/${variant}`;
  };

  return { getImageCdnUrl };
};
