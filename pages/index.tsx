import React, { useRef } from 'react';
import Image from 'next/image'
import matrixbg from '../public/assets/images/matrix.jpg';
import Hero from '../components/Hero';
import Mission from '../components/Mission';

const index = () => {
  return (
    <div className='relative'>
        <Hero />
        <div className='-mt-11 w-full bg-center bg-no-repeat bg-cover aspect-[900/280] layer1t' />
        <Mission />
        <div className='-mt-72 w-full bg-center bg-no-repeat bg-cover aspect-[900/280] layer1b' />
    </div>
  );
};

export default index;
