import React, { useRef } from 'react';
import Image from 'next/image'
import matrixbg from '../public/assets/images/matrix.jpg';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Domains from '../components/Domains';
import Client from '../components/Client';
import ProductJourney from '../components/ProductJourney';
import Faq from '../components/Faq';
import Careers from '../components/Careers';

const index = () => {
  return (
    <div className='relative'>
        <Hero />
        <div className='w-full bg-center bg-no-repeat bg-cover aspect-[900/100] layer1t' />
        <div className='bg-matrix-circular '>
          <Mission />
          <Domains />
        </div>
        <Client />
        <ProductJourney />
        <Faq />
        <Careers />
    </div>
  );
};

export default index;
