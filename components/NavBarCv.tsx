import React from 'react';
import Link from 'next/link';

export default function NavBarCv({ bio, bioChange, menu, changeMenu }: any) {
  const updateBio = () => {
    bioChange(!bio);
  };

  const updateMenu = () => {
    changeMenu(!menu);
  };
  return (
    <div className='mr-0 ml-4 mt-4'>
      <div className='select-none font-bold z-20 cursor-pointer text-md leading-none h-fit'>
        <Link href='./'>trenton teinert</Link>
      </div>
      <button
        onClick={updateMenu}
        className={
          menu
            ? 'select-none top-[13px] left-[140px] leading-none p-1 flex justify-center absolute z-20 transition-all duration-500 rotate-[-90deg] md:rotate-[-180deg]'
            : 'select-none top-[13px] left-[140px] leading-none p-1 flex justify-center absolute z-20 transition-all duration-500 rotate-[90deg] md:rotate-0'
        }
        // className={
        //   menu
        //     ? 'absolute select-none h-[20px] w-[20px] hover:scale-125 rotate-[-90deg] rotate-0 md:rotate-[-180deg] z-20 transition-all md:duration-500 duration-200 cursor-pointer text-sm leading-none'
        //     : 'bg-blue-400 absolute select-none h-[12px] hover:scale-125 rotate-90 md:rotate-0 z-20 transition-all md:duration-500 duration-200 cursor-pointer text-sm leading-none'
        // }
      >
        &#10148;
      </button>
      <div
        className={
          menu ? 'opacity-1 transition-all' : 'opacity-0 transition-all'
        }
      >
        <div className='cursor-pointer select-none text-sm mt-1 leading-none'>
          <a href={'mailto:trentteinert@gmail.com'}>contact@trentteinert.com</a>
        </div>
        <ul className='text-sm select-none flex w-fit mt-1'>
          <li
            className='cursor-pointer mr-4 leading-none h-fit m-auto'
            onClick={updateBio}
          >
            bio
          </li>
          <li className='cursor-pointer mr-4 leading-none m-auto'>
            <Link href='/cv'>cv</Link>
          </li>
          <li className='cursor-pointer leading-none h-fit m-auto line-through hover:text-teal-800'>
            archive
          </li>
        </ul>
        <div
          className={
            bio
              ? 'transition-all mr-4 md:mr-0 opacity-1 md:absolute text-justify mt-1 text-sm'
              : 'transition-all mr-4 md:mr-0 opacity-0 hidden md:absolute text-justify mt-1 text-sm'
          }
        >
          is a artist based in Brooklyn, Nyc. his work explores the results of
          our capitlist society in his local surrounding and how individuals
          revolt against the way they are made to use public space.
        </div>
      </div>
    </div>
  );
}
