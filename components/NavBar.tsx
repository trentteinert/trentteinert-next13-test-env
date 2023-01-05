import React from 'react';
import { useState } from 'react';

export default function NavBar({ bio, bioChange, menu, changeMenu }: any) {
  const updateBio = () => {
    bioChange(!bio);
  };

  const updateMenu = () => {
    changeMenu(!menu);
  };
  return (
    <div className='select-none mr-0 ml-4 mt-4'>
      <div className='flex mb-1'>
        <h1 className='z-20 cursor-pointer text-md leading-none h-fit'>
          trenton teinert
        </h1>
        <h1
          onClick={updateMenu}
          className={
            menu
              ? 'ml-4 mt-[2px] h-[12px] hover:scale-125 rotate-[-180deg] z-20 transition-all md:duration-500 duration-200 cursor-pointer text-sm leading-none'
              : 'ml-4 mt-[2px] h-[12px] hover:scale-125 z-20 transition-all md:duration-500 duration-200 cursor-pointer text-sm leading-none'
          }
        >
          &#10148;
        </h1>
      </div>
      <div
        className={
          menu ? 'opacity-1 transition-all' : 'opacity-0 transition-all'
        }
      >
        <p className='cursor-pointer mb-1 text-sm leading-none h-fit m-auto'>
          contact@trentteinert.com
        </p>
        <ul className='text-sm flex w-fit'>
          <li
            className='cursor-pointer mr-4 leading-none h-fit m-auto'
            onClick={updateBio}
          >
            bio
          </li>
          <li className='cursor-pointer mr-4 leading-none h-fit m-auto'>cv</li>
          <li className='cursor-pointer leading-none h-fit m-auto'>archive</li>
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
