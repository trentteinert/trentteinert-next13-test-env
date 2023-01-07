import Head from 'next/head';
import NavBar from '../components/NavBar';
import SlideShow from '../components/SlideShow';
import { useState } from 'react';

export default function Home() {
  const [bio, bioChange] = useState(false);
  const [menu, changeMenu] = useState(false);
  return (
    <>
      <Head>
        <title>trenton teinert</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>
          <NavBar
            bio={bio}
            bioChange={bioChange}
            menu={menu}
            changeMenu={changeMenu}
          />
        </div>
        <div>
          <SlideShow
            bio={bio}
            bioChange={bioChange}
            menu={menu}
            changeMenu={changeMenu}
          />
        </div>
      </main>
    </>
  );
}
