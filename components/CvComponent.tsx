import React from 'react';

export default function CvComponent({ bio, bioChange, menu, changeMenu }: any) {
  return (
    <main>
      <div
        className={
          menu
            ? `max-w-[500px] text-justify relative z-10 transition-all ${
                bio ? 'mt-[175px] md:mt-[40px]' : 'mt-[80px] md:mt-[40px]'
              } ml-4 md:ml-52 pb-[60px] mr-4`
            : 'max-w-[500px] text-justify relative z-10 transition-all mt-10 ml-4 pb-[60px] mr-4'
        }
        // className='w-[90%] text-justify m-auto'
      >
        <div className='font-bold text-sm text- mb-1'>
          <p>Born 1998 / Harlingen, Tx.</p>
        </div>
        <div className=''>
          <h1 className='text-lg font-bold'>EDUCATION</h1>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2023 MFA with a Photography concentration, Parsons New School of
            Design, New York, NY, (expected 2023)
          </p>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2021 BFA with a Photography and Digital Media concentration,
            Kathrine G. McGovern College of the Arts, University of Houston,
            Houston, TX
          </p>
        </div>

        <div className=''>
          <h1 className='text-lg font-bold'>EXHIBITIONS</h1>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2022 &apos;Photoville annual festival&apos; Brooklyn, NY
          </p>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2021 ‘UH School of Art Annual Student Exhibition’ Blaffer Art
            Museum, Houston, TX - 2021 ‘Emergence’ Part II, UH Senior Block
            Exhibition, Houston, TX - 2020 ‘Untitled’ For 1100
            Louisiana&apos;s&apos; Video Wall, (pending) Houston, Texas (in
            collaboration with Reggie Tucker, Lisa Bridges, and Dre Negrete)
          </p>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2020 ‘Assuming the Pose: Contemporary Takes on Portraiture’, Third
            Space, Fine Arts Building, University of Houston, Houston, Texas
          </p>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2019 ‘Disquiet’ Block Review Showing, University of Houston, Fine
            Arts Building, Houston, Texas
          </p>
        </div>

        <div className=''>
          <h1 className='text-lg font-bold'>PUBLICATIONS</h1>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2021 ‘Harlingen AGRI’ Feature, University of Houston’s 2021 Photo
            Digital Media Student Exhibition ‘Emergence’ Part II, Here (2021)
          </p>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2021 ‘Onions’ Feature ‘In Parentheses Magazine’, Volume 6, Issue
            4, Now Available (2021)
          </p>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2020 ‘Trenton Teinert,’ Deep Red Press, Month’s Featured Artist
            Here (2020) - 2020 ‘Harlingen’ Self Published Photo Zine, a
            Reflection of My Hometown (2020)
          </p>
        </div>

        <div className=''>
          <h1 className='text-lg font-bold'>RELATED EXPERIENCE</h1>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2017-20 Freelance, Harlingen/Houston, TX, Creator
          </p>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2016-18 Fast Signs, Harlingen, TX, Designer
          </p>
        </div>
        <div className=''>
          <h1 className='text-lg font-bold'>RESEARCH</h1>
          <p className='ml-2 mr-2 mt-1 mb-1 md:text-sm text-xs'>
            - 2020 Independent Study, Faculty Leadership Professor Delilah
            Montoya; Agriculture study of Harlingen Texas.
          </p>
        </div>
      </div>
    </main>
  );
}
