import React, { useRef } from 'react';
import Image from 'next/image'
import matrixbg from '../public/assets/images/matrix.jpg';

const index = () => {


  return (
    <div>
      <div className='bg-scroll'>
        {/* <Image
          alt="Mountains"
          src={matrixbg}
          layout="responsive"
          objectFit="cover"
          quality={100}
        /> */}
         <video
            autoPlay
            className='absolute bg-scroll lg:max-w-sreen lg:max-h-screen'
            loop
            muted
          >
            <source src='/assets/matrixRain.mp4' />
          </video>
          <div className="flex items-center justify-center w-1/4 mx-3.5 h-96 backdrop-blur-sm bg-white/30 rounded-3xl mt-14">
            <h1 className='text-6xl font-extrabold tracking-tight text-white'>Tomorrow is Here and We’re Building it.</h1>
          </div>
      </div>
    </div>
  );
};

export default index;
