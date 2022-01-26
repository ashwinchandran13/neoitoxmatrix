import React from 'react';
import Image from 'next/image';
import planning from '../public/assets/images/business.png';

const Mission = () => {
  return (
      <div className='grid content-between w-auto grid-cols-2 h-96 bg-gradient-to-t from-matrix_bg_color' id='mission'>
          <div className='h-auto p-4 lg:w-1/2 backdrop-blur-3xl'>
            <h2 className='text-2xl text-white '>
                We help businesses solve their intricate challenges with the best of technology in half the time.  
            </h2>
          </div>
          <div className='p-2 shadow-lg bg-matrix_green_btn shadow-matrix_green_btn h-fit w-fit'>
              <Image 
                src={planning}
                className='cursor-pointer '
                alt='planning'
                width='100'
                height='100'
                layout='fixed'
                quality='100'
              />
          </div>
          <div className='h-auto lg:w-1/2 md:w-auto backdrop-blur-3xl'>
            <h2 className='text-2xl text-white '>
                Our team of agile developers finds the quickest route from ideation to delivery and works on 
                cutting-edge technology to build some of the most advanced solutions our customers love to use.            
            </h2>
          </div>
          
      </div>
  );
};

export default Mission;
