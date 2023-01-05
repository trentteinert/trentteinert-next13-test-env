import React from 'react';
import NavBar from '../components/NavBar';
import CvComponent from '../components/CvComponent';
import { useState } from 'react';

export default function cv() {
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
        <NavBar
          bio={bio}
          bioChange={bioChange}
          menu={menu}
          changeMenu={changeMenu}
        />
      </div>
    </main>
  );
}
