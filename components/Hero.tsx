import React from 'react';
import { motion } from 'framer-motion';
import { draw, easeIn, fadeInUp, infiniteLineDraw } from '../animations';

const Hero = () => {

  // const missionScroll = () => {
  //   return location.href = '#mission'
  // }

  return (
    <motion.header variants={easeIn} initial="initial" animate="animate" className='relative flex items-center justify-center h-screen overflow-hidden' id='hero'
    // className="sticky top-0 z-50" 
    >
      <motion.div variants={fadeInUp} initial="initial" animate="animate" className='relative z-30 flex flex-col w-auto h-auto p-4 backdrop-blur-sm'>
        <div className="flex items-center justify-center">
          <h1 className='text-3xl font-extrabold tracking-tight text-center text-white lg:text-8xl md:text-5xl drop-shadow-lg'>Tomorrow is Here and We’re Building it.</h1>
        </div>

        <h3 className="flex items-center justify-center text-lg font-medium tracking-wide text-center text-white drop-shadow-2xl mt-11 lg:text-xl md:text-lg">
          With some of the best minds in the tech industry who envision challenges to build game-changing products
        </h3>
      </motion.div>

      <motion.div variants={fadeInUp} initial="initial" animate="animate" className='absolute z-30 bottom-20'>
        {/* <button type='button' className='flex items-center justify-center w-10 h-10 p-2 bg-white rounded-full shadow-lg animate-bounce dark:bg-slate-800/20 ring-1 ring-slate-900/5 dark:ring-slate-200/20' onClick={(e) => {e.stopPropagation(); missionScroll();}} >
            <svg className="w-6 h-6 text-matrix_green_btn" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button> */}
        <motion.svg initial="hidden" whileInView="visible" width="2" height="190" viewBox="0 0 2 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.line variants={infiniteLineDraw} x1="0.499993" y1="0.997355" x2="1.49999" y2="189.997" stroke="white" />
        </motion.svg>
      </motion.div>

      <video
        autoPlay
        className='absolute top-0 z-10 object-cover w-auto h-screen bg-fixed bg-center bg-cover lg:min-w-full aspect-video'
        loop
        muted
      >
        <source src='/assets/matrixRain.mp4' />
      </video>
    </motion.header>
  );
};

export default Hero;
