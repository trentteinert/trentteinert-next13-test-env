import React from 'react';
import Image from 'next/image';
import imageKitLoader from './ImageLoader';
import { useState } from 'react';
import imageList from './ImageList';
import { motion, AnimatePresence } from 'framer-motion';
export default function SlideShow({ bio, menu }: any) {
  const [image, setImage] = useState(10);

  const navigateSlide = () => {
    const isLastSlide = image === imageList.length;
    const newIndex = isLastSlide ? 1 : image + 1;
    setImage(newIndex);
  };
  console.log(image);
  return (
    <div
      onClick={navigateSlide}
      className={
        menu
          ? `cursor-pointer h-[85vh] relative transition-all ${
              bio ? 'mt-[145px]' : 'mt-10'
            } md:mt-2 ml-4 md:ml-60 mr-4`
          : `cursor-pointer h-[85vh] relative transition-all mt-2 ml-4 mr-4`
      }
    >
      <AnimatePresence>
        <motion.div
          transition={{ duration: 0.2 }}
          key={image}
          initial={{
            opacity: 0,
            display: 'none',
          }}
          animate={{
            opacity: 1,
            transitionEnd: {
              display: 'block',
            },
          }}
          exit={{
            opacity: 0,
            transitionEnd: {
              display: 'none',
            },
          }}
        >
          <Image
            className='intrinsic select-none transition-all duration-500 max-h-[85vh] w-fit border cursor-pointer'
            onClick={navigateSlide}
            src={`img${image}.jpg`}
            alt='/'
            width={1080}
            height={720}
            quality={80}
            loader={imageKitLoader}
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
