import { FC, ReactNode } from 'react';
import { CdnImage } from '../image/cdn-image';

type Props = {
  title: string;
  subTitle: string;
  altText?: ReactNode;
  callToActionContent?: ReactNode;
  illustration: {
    cdnPath: string;
    width: number;
    height: number;
  };
};

const HeadingAndIllustration: FC<Props> = ({
  illustration,
  title,
  subTitle,
  altText,
  callToActionContent,
}) => {
  return (
    <div className='w-full flex-col flex items-center justify-center gap-y-12  mb-20 lg:flex-row lg:gap-x-20 xl:gap-x-24'>
      <div className='flex flex-col gap-y-5 lg:max-w-2xl'>
        <h1 className='text-5xl text-slate-200'>{title}</h1>
        <h2 className='text-4xl text-slate-400'>{subTitle}</h2>
        {altText && <p className='text-xl text-slate-500'>{altText}</p>}
        {!!callToActionContent && (
          <div className='flex justify-center mt-4 gap-x-4 lg:justify-start'>
            {callToActionContent}
          </div>
        )}
      </div>
      <CdnImage
        cdnPath={illustration.cdnPath}
        alt='Skills illustration'
        className='-order-1 w-full sm:w-auto sm:h-88 lg:order-1 2xl:h-108'
        width={illustration.width}
        height={illustration.height}
      />
    </div>
  );
};

export default HeadingAndIllustration;
