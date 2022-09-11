import { ComponentProps, FC } from 'react';
import { useImageCdn } from '~/utils/cdn';
import { ImageVariant } from './image-variant';

type Props = Omit<
  ComponentProps<'img'>,
  'src' | 'srcSet' | 'width' | 'height'
> & {
  cdnPath: string;
} & Required<Pick<ComponentProps<'img'>, 'alt'>>;

export const LogoImage: FC<Props> = ({ cdnPath, ...otherImgProps }) => {
  const { getImageCdnUrl } = useImageCdn();

  const src = getImageCdnUrl({ cdnPath, variant: ImageVariant.logo });

  // "alt" is a required prop, so we can safely ignore the eslint warning
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={src} {...otherImgProps} width='32' height='32' />;
};
