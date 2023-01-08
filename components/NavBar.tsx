import React from 'react';
import Link from 'next/link';
import BioText from './BioText';
import { CgArrowRightR } from 'react-icons/cg';

export default function NavBar({ bio, bioChange, menu, changeMenu }: any) {
  const updateBio = () => {
    bioChange(!bio);
  };

  const updateMenu = () => {
    changeMenu(!menu);
  };
  return (
    <div className='ml-4 mt-4 transition-all '>
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

      <div
        className={
          menu
            ? 'w-[96%] sm:w-96 md:w-fit mr-4 absolute opacity-1'
            : 'w-[96%] sm:w-96 md:w-fit mr-4 absolute opacity-0'
        }
      >
        <a
          href={'mailto:trentteinert@gmail.com'}
          className='select-none cursor-pointer text-sm leading-none h-fit'
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

        <div
          className={
            bio
              ? 'h-20 md:h-fit mt-1 mr-4 absolute md:w-fit'
              : 'h-20  md:h-fit mt-1 mr-4 absolute md:w-fit opacity-0'
          }
        >
          <BioText />
        </div>
      </div>
    </div>
  );
}
