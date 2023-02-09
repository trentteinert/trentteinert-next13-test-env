import React from 'react';
import Image from 'next/image';
import imageKitLoader from './ImageLoader';
import { useState } from 'react';
import imageList from './ImageList';
import { motion, AnimatePresence } from 'framer-motion';
export default function SlideShow({ bio, menu }: any) {
  const [image, setImage] = useState(0);
  const slideUp = () => {
    if (image === imageList.length - 1) {
      setImage(0);
    } else setImage(image + 1);
  };
  const slideDown = () => {
    if (image === 0) {
      setImage(imageList.length - 1);
    } else setImage(image - 1);
  };
  console.log(image);

  return (
    <div
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
          className='w-fit'
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
            className='select-none transition-all duration-500 max-h-[85vh] w-fit border cursor-pointer'
            onClick={slideUp}
            src={imageList[image].src}
            alt='/'
            width={1080}
            height={720}
            quality={80}
            loader={imageKitLoader}
            priority
          />
          <ul className='flex justify-end text-xs mt-1'>
            <li onClick={slideDown} className='select-none mr-2'>
              prev
            </li>
            <li onClick={slideUp} className='select-none'>
              next
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
