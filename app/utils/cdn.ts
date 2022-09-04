type GetImageCdnUrlArgs = {
  imagePath: string;
  variant: string;
};

export const getImageCdnUrl = ({ imagePath, variant }: GetImageCdnUrlArgs) => {
  // In production serve the images from the same domain
  if (process.env.NODE_ENV === 'production') {
    return `/cdn-cgi/imagedelivery/0uj9SUnHui6vrXgyuOODuw/${imagePath}/${variant}`;
  }

  return `https://imagedelivery.net/0uj9SUnHui6vrXgyuOODuw/${imagePath}/${variant}`;
};
