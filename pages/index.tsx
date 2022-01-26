import React, { useRef } from 'react';
import Image from 'next/image'
import matrixbg from '../public/assets/images/matrix.jpg';
import Hero from '../components/Hero';
import Mission from '../components/Mission';

const index = () => {
  return (
    <div className='relative'>
        <Hero />
        <Mission />
    </div>
  );
};

export default index;
