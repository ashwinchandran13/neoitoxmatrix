import React, { FunctionComponent, ReactNode, useRef } from 'react';
import Image from 'next/image'
import matrixbg from '../public/assets/images/matrix.jpg';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Domains from '../components/Domains';
import Client from '../components/Client';
import ProductJourney from '../components/ProductJourney';
import Faq from '../components/Faq';
import Careers from '../components/Careers';
import FooterBar from '../components/FooterBar'
import { motion } from 'framer-motion';
import { GetServerSidePropsContext } from 'next';

const index = () => {
  return (
    <div className='relative overflow-x-clip'>
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
      <FooterBar />
    </div>
  );
};

export default index;

export const getServerSideProps = async (context:GetServerSidePropsContext) => {  
  return {
    props:{
      endpoint: process.env.VERCEL_URL,
    }
  }

}
