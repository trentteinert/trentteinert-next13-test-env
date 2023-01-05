import React from 'react';
import Image from 'next/image';
import imageKitLoader from './ImageLoader';
import { useState } from 'react';
import imageList from './ImageList';

export default function SlideShow({ menu, changeMenu }: any) {
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
            ? 'relative z-10 transition-all translate-x-[300px] pl-4 pt-[65px] pb-[60px] pr-[60px]'
            : ' relative z-10 transition-all translate-x-[0px] pl-4 pt-[65px] pb-[60px] pr-[60px]'
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
