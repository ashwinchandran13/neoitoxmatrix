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
import { keepAfloat } from '../animations';
import Head from 'next/head';

const index = () => {
  return (
    <div className='relative overflow-x-clip'>
      <Head>
        <title>
          Neotio X The Matrix
        </title>
      </Head>
      <Hero />
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
