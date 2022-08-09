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
    <div className='w-full flex justify-center gap-x-24 mb-20'>
      <div className='flex flex-col gap-y-5 max-w-lg'>
        <h1 className='text-5xl text-slate-200'>{title}</h1>
        <h2 className='text-4xl text-slate-400'>{subTitle}</h2>
      </div>
      <img
        src={illustrationSrc}
        alt='Skills illustration'
        className='w-160 h-140'
      />
    </div>
  );
};

export default HeadingAndIllustration;
