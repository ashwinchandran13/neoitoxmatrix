import React from 'react';

const Domains = () => {
  return (
    <div className='relative'>
      <video
        autoPlay
        className='absolute top-0 z-10 w-auto bg-fixed bg-center bg-cover lg:h-auto md:h-3/4 lg:min-w-full lg:min-h-full max-w-none aspect-[6/2]'
        loop
        muted
        src='/assets/matrixRain.mp4'
      >
      </video>
    </div>
  )
};

export default Domains;
