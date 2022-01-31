import React, { useRef } from 'react';
import Image from 'next/image'
import matrixbg from '../public/assets/images/matrix.jpg';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Domains from '../components/Domains';

const index = () => {
  return (
    <div className='relative'>
        <Hero />
        <div className='w-full bg-center bg-no-repeat bg-cover aspect-[900/100] layer1t' />
        <div className='bg-matrix-circular'>
          <Mission />
          <Domains />
        </div>
    </div>
  );
};

export default index;
