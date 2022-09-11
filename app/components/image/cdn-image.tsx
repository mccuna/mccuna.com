import { ComponentProps, FC } from 'react';
import { useImageCdn } from '~/utils/cdn';
import { ImageVariant } from './image-variant';

type Props = Omit<ComponentProps<'img'>, 'src' | 'srcSet'> & {
  cdnPath: string;
} & Required<Pick<ComponentProps<'img'>, 'alt'>>;

export const CdnImage: FC<Props> = ({ cdnPath, ...imgProps }) => {
  const { getImageCdnUrl } = useImageCdn();

  const srcSet = Object.values(ImageVariant)
    .filter((variant) => variant !== ImageVariant.logo)
    .map((variant) => {
      return `${getImageCdnUrl({
        cdnPath,
        variant,
      })} ${defaultSizes[variant as ResponsiveImageVariant]}`;
    })
    .join(', ');

  // "alt" is a required prop, so we can safely ignore the eslint warning
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img srcSet={srcSet} {...imgProps} />;
};

type ResponsiveImageVariant = Exclude<ImageVariant, ImageVariant.logo>;

const defaultSizes: Record<ResponsiveImageVariant, string> = {
  xs: '320w',
  sm: '640w',
  md: '768w',
  lg: '1024w',
  xl: '1280w',
  '2xl': '1536w',
};
