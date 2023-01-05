import React from 'react';

import CvComponent from '../components/CvComponent';
import Link from 'next/link';
import { useState } from 'react';
import NavBarCv from '../components/NavBarCv';

export default function Cv() {
  const [bio, bioChange] = useState(false);
  const [menu, changeMenu] = useState(false);
  return (
    <main>
      <div>
        <CvComponent
          bio={bio}
          bioChange={bioChange}
          menu={menu}
          changeMenu={changeMenu}
        />
      </div>
      <div className='absolute top-0 left-0'>
        <NavBarCv
          bio={bio}
          bioChange={bioChange}
          menu={menu}
          changeMenu={changeMenu}
        />
        {/* <Link
          href={'./'}
          className='z-20 absolute opacity-0 top-[15px] ml-[10px] h-[20px] w-[130px] bg-slate-300'
        ></Link> */}
      </div>
    </main>
  );
}
