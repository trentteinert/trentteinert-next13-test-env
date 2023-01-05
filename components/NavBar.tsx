import React from 'react';
import { useState } from 'react';

export default function NavBar({ menu, changeMenu }: any) {
  const [bio, bioChange] = useState(false);

  const updateBio = () => {
    bioChange(!bio);
  };

  const updateMenu = () => {
    changeMenu(!menu);
  };
  return (
    <div className='select-none relative ml-4 mt-[40px]'>
      <div className='flex mb-1'>
        <h1 className='z-20 cursor-pointer text-md leading-none h-fit'>
          trenton teinert
        </h1>
        <h1
          onClick={updateMenu}
          className={
            menu
              ? 'z-20 mt-[0px] m-auto transition-all duration-500 rotate-180 cursor-pointer ml-4 text-sm leading-none'
              : 'z-20 mt-[2px] m-auto transition-all duration-500 cursor-pointer ml-4 text-sm leading-none'
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
              ? 'transition-all opacity-1 w-44 text-justify mt-2'
              : 'transition-all opacity-0 w-44 text-justify mt-0'
          }
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sit
          nisi vero nostrum qui cumque. Error atque ipsam quos voluptas pariatur
          eveniet libero, ex a laudantium, temporibus, iure tempore distinctio.
        </div>
      </div>
    </div>
  );
}
