import React from 'react';
import Image from 'next/image';
import planning from '../public/assets/images/business.png';
import team from '../public/assets/images/team.png';

const Mission = () => {
  return (
      <div className='mx-11 relative flex flex-col justify-center w-auto lg:h-[80vh] md:h-[60vh] sm:h-[40vh]' id='mission'>
        <div className='flex justify-start place-items-center'>
          <div className='ml-4 shadow-lg md:p-2 sm:p-1 h-fit w-fit backdrop-blur-sm'>
              <Image 
                src={planning}
                alt='planning'
                width='200'
                height='200'
                layout='intrinsic'
                quality='100'
              />
          </div>
          <div className='flex h-auto place-items-center md:p-2 sm:p-1 lg:w-1/2 backdrop-blur-sm'>
            <h2 className='text-center text-white lg:text-3xl md:text-lg sm:text-xs'>
                We help businesses solve their intricate challenges with the best of technology in half the time.  
            </h2>
          </div>
        </div>
          
          <div className='flex justify-end place-items-center'>
            <div className='flex h-auto p-4 place-items-center md:p-2 sm:p-1 lg:w-1/2 md:w-auto justify-self-center backdrop-blur-sm'>
              <h2 className='text-center text-white lg:text-3xl md:text-lg sm:text-xs'>
                  Our team of agile developers finds the quickest route from ideation to delivery and works on 
                  cutting-edge technology.            
              </h2>
            </div>
            <div className='p-4 mr-4 shadow-lg md:p-2 sm:p-1 h-fit w-fit justify-self-center backdrop-blur-sm'>
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
      </div>
  );
};

export default Mission;
