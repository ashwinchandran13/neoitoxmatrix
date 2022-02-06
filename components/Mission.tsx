import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import planning from '../public/assets/images/business.png';
import team from '../public/assets/images/team.png';
import { motion } from 'framer-motion';
import { draw, slideInLeft, slideInRight, viewPort } from '../animations';

const Mission: FunctionComponent = () => {
  return (
    <div className='relative flex flex-col justify-center p-8 mx-auto select-none lg:max-w-7xl md:max-w-2xl' id='mission'>
      <motion.div variants={slideInRight} initial="initial" whileInView="animate" viewport={viewPort} whileHover={{ scale: 1.05 }} className='flex justify-start shadow-lg place-items-center bg-matrix_green_header shadow-matrix_bg_color/30'>
        <div className='flex self-center p-1 shadow-lg md:p-2 h-fit w-fit bg-matrix_bg_color shadow-black/30'>
          <Image
            src={planning}
            alt='planning'
            width='200px'
            height='200px'
            layout='intrinsic'
            quality='100'
          />
        </div>
        <div className='flex h-auto p-1 ml-2 md:ml-4 md:p-2 w-fit lg:w-8/12'>
          <h2 className='text-sm text-left text-white md:text-xl lg:text-3xl'>
            We help businesses solve their intricate challenges with the best of technology in half the time.
          </h2>
        </div>
      </motion.div>

      <motion.div variants={slideInLeft} initial="initial" whileInView="animate" viewport={viewPort} whileHover={{ scale: 1.05 }} className='flex justify-end mt-10 shadow-lg place-items-center bg-matrix_green_header shadow-matrix_bg_color/30'>
        <div className='flex h-auto p-1 mr-2 w-fit md:mr-4 md:p-2 lg:w-8/12 '>
          <h2 className='text-sm text-right text-white md:text-xl lg:text-3xl'>
            Our Agile developers find the quickest route from ideation to delivery using cutting-edge technology.
          </h2>
        </div>
        <div className='flex self-center p-1 shadow-lg md:p-2 h-fit w-fit justify-self-center bg-matrix_bg_color shadow-black/30'>
          <Image
            src={team}
            alt='team'
            width='200px'
            height='200px'
            layout='intrinsic'
            quality='100'
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
