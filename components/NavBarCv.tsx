import React from 'react';
import Link from 'next/link';
import BioText from './BioText';
import { CgArrowRightR } from 'react-icons/cg';

export default function NavBarCv({ bio, bioChange, menu, changeMenu }: any) {
  const updateBio = () => {
    bioChange(!bio);
  };

  const updateMenu = () => {
    changeMenu(!menu);
  };
  return (
    <div className=' mt-4 md:ml-4 ml-[5%] w-fit'>
      <div className='flex select-none'>
        <Link
          href='./'
          className='cursor-grab active:cursor-grabbing text-md leading-none mr-4'
        >
          trenton teinert
        </Link>
        <CgArrowRightR
          onClick={updateMenu}
          className={
            menu
              ? 'cursor-grab active:cursor-grabbing transition-all  text-md leading-none rotate-[-90deg] md:rotate-[-180deg]'
              : 'cursor-grab active:cursor-grabbing transition-all  text-md leading-none rotate-90 md:rotate-0'
          }
        />
      </div>

      <div
        className={
          menu
            ? 'transition-all leading-none md:w-[190px] w-[90%] absolute opacity-1 mt-0'
            : 'transition-all leading-none md:w-[180px] w-[90%] absolute opacity-0 mt-0 pointer-events-none '
        }
      >
        <a
          href={'mailto:trentteinert@gmail.com'}
          className='cursor-grab active:cursor-grabbing select-none  text-sm leading-none h-fit'
        >
          contact@trentteinert.com
        </a>
        <ul className='select-none text-sm leading-none flex justify-between w-28 mt-1'>
          <li className={''} onClick={updateBio}>
            bio
          </li>
          <li>
            <Link href={'./cv'}>cv</Link>
          </li>
          <li className='leading-none line-through hover:text-teal-800'>
            archive
          </li>
        </ul>

        <div
          className={
            bio
              ? 'transition-all mt-1 md:w-fit opacity-1'
              : 'transition-all mt-1 md:w-fit opacity-0'
          }
        >
          <BioText />
        </div>
      </div>
    </div>
  );
}
