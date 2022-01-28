import React from 'react';
import Image from 'next/image';
import planning from '../public/assets/images/business.png';
import team from '../public/assets/images/team.png';

const Mission = () => {
  return (
      <div className='relative flex w-auto place-items-center' id='mission'>
          <div className='p-4 ml-4 shadow-lg md:p-2 sm:p-1 h-fit w-fit justify-self-center'>
              <Image 
                src={planning}
                alt='planning'
                width='200'
                height='200'
                layout='intrinsic'
                quality='100'
              />
          </div>
          <div className='h-auto p-4 md:p-2 sm:p-1 lg:w-1/2 justify-self-center'>
            <h2 className='text-center text-white lg:text-3xl md:text-lg sm:text-xs'>
                We help businesses solve their intricate challenges with the best of technology in half the time.  
            </h2>
          </div>
          
          <div className='h-auto p-4 md:p-2 sm:p-1 lg:w-1/2 md:w-auto justify-self-center'>
            <h2 className='text-center text-white lg:text-3xl md:text-lg sm:text-xs'>
                Our team of agile developers finds the quickest route from ideation to delivery and works on 
                cutting-edge technology.            
            </h2>
          </div>
          <div className='p-4 mr-4 shadow-lg md:p-2 sm:p-1 h-fit w-fit justify-self-center'>
              <Image 
                src={team}
                alt='team'
                width='200'
                height='200'
                layout='intrinsic'
                quality='100'
              />
          </div>          
      </div>
  );
};

export default Mission;
