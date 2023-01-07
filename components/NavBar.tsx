import React from 'react';
import Link from 'next/link';
import BioText from './BioText';
import { CgArrowRightR } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar({ bio, bioChange, menu, changeMenu }: any) {
  const updateBio = () => {
    bioChange(!bio);
  };

  const updateMenu = () => {
    changeMenu(!menu);
  };
  return (
    <div className='md:absolute ml-4 mt-4 w-fit'>
      <div className='flex select-none'>
        <div
          onClick={updateMenu}
          className='cursor-pointer text-md leading-none mr-4'
        >
          trenton teinert
        </div>
        <CgArrowRightR
          onClick={updateMenu}
          className={
            menu
              ? 'transition-all cursor-pointer text-md leading-none rotate-[-90deg] md:rotate-[-180deg]'
              : 'transition-all cursor-pointer text-md leading-none rotate-90 md:rotate-0'
          }
        />
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <a
              href={'mailto:trentteinert@gmail.com'}
              className='cursor-pointer text-sm leading-none h-fit'
            >
              contact@trentteinert.com
            </a>
            <ul className='select-none text-sm leading-none flex justify-between w-28'>
              <li className={'cursor-pointer'} onClick={updateBio}>
                bio
              </li>
              <li>
                <Link href={'./cv'}>cv</Link>
              </li>
              <li className='line-through hover:text-teal-800'>archive</li>
            </ul>
            <AnimatePresence>
              {bio && (
                <motion.div
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <BioText />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
