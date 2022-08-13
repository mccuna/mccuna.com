import { FC, ImgHTMLAttributes } from 'react';

type Props = {
  title: string;
  subTitle: string;
  illustrationSrc: ImgHTMLAttributes<HTMLImageElement>['src'];
};

const HeadingAndIllustration: FC<Props> = ({
  illustrationSrc,
  subTitle,
  title,
}) => {
  return (
    <div className='w-full flex-col flex items-center justify-center gap-y-12  mb-20 lg:flex-row lg:gap-x-20 xl:gap-x-24'>
      <div className='flex flex-col gap-y-5 max-w-lg'>
        <h1 className='text-5xl text-slate-200'>{title}</h1>
        <h2 className='text-4xl text-slate-400'>{subTitle}</h2>
      </div>
      <img
        src={illustrationSrc}
        alt='Skills illustration'
        className='-order-1 w-full h-96 sm:w-11/12 md:h-140 lg:order-1'
      />
    </div>
  );
};

export default HeadingAndIllustration;
