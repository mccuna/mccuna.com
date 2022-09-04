import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  subTitle: string;
  altText?: ReactNode;
  callToActionContent?: ReactNode;
  illustrationCdnPath: string;
};

const HeadingAndIllustration: FC<Props> = ({
  illustrationCdnPath,
  title,
  subTitle,
  altText,
  callToActionContent,
}) => {
  return (
    <div className='w-full flex-col flex items-center justify-center gap-y-12  mb-20 lg:flex-row lg:gap-x-20 xl:gap-x-24'>
      <div className='flex flex-col gap-y-5 max-w-3xl'>
        <h1 className='text-5xl text-slate-200'>{title}</h1>
        <h2 className='text-4xl text-slate-400'>{subTitle}</h2>
        {altText && <p className='text-xl text-slate-500'>{altText}</p>}
        {!!callToActionContent && (
          <div className='flex justify-center mt-4 gap-x-4 lg:justify-start'>
            {callToActionContent}
          </div>
        )}
      </div>
      <img
        src={illustrationCdnPath}
        alt='Skills illustration'
        className='-order-1 w-full h-96 sm:w-11/12 md:h-140 lg:order-1 lg:w-1/2 xl:w-7/12'
      />
    </div>
  );
};

export default HeadingAndIllustration;
