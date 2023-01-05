import React from 'react';
import Image from 'next/image';
import imageKitLoader from './ImageLoader';
import { useState } from 'react';
import imageList from './ImageList';

export default function SlideShow({ bio, bioChange, menu, changeMenu }: any) {
  const [image, setImage] = useState(10);

  const navigateSlide = () => {
    const isLastSlide = image === imageList.length;
    const newIndex = isLastSlide ? 1 : image + 1;
    setImage(newIndex);
  };
  console.log(image);
  return (
    <>
      <main
        className={
          menu
            ? `select-none relative z-10 transition-all ${
                bio ? 'mt-[180px] md:mt-[40px]' : 'mt-[80px] md:mt-[40px]'
              } ml-4 md:ml-52 pb-[60px] pr-4`
            : 'select-none relative z-10 transition-all mt-10 ml-4 pb-[60px] pr-4'
        }
      >
        <Image
          className='intrinsic transition-all duration-500 opacity-1 max-h-[85vh] w-fit border cursor-pointer'
          onClick={navigateSlide}
          src={`img${image}.jpg`}
          alt='/'
          width={1080}
          height={720}
          quality={80}
          loader={imageKitLoader}
          priority
        />
      </main>
    </>
  );
}
