import React from 'react';

const Hero = () => {
  const missionScroll = () => {
      return location.href = '#mission'
  }
  return (
    <header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'
    // className="sticky top-0 z-50"
    >
      <div className='relative z-30 flex flex-col w-auto h-auto p-4 backdrop-blur-sm'>
        <div className="flex items-center justify-center">
            <h1 className='font-extrabold tracking-tight text-center text-white lg:text-8xl md:text-5xl drop-shadow-lg sm:text-3xl'>Tomorrow is Here and We’re Building it.</h1>
        </div>

        <h3 className="flex items-center justify-center font-medium tracking-wide text-center text-white drop-shadow-2xl mt-11 lg:text-xl md:text-lg">
            With some of the best minds in the tech industry who envision challenges to build game-changing products
        </h3>
      </div>

      <div className='absolute z-30 bottom-24'>
          <button type='button' className='flex items-center justify-center w-10 h-10 p-2 bg-white rounded-full shadow-lg animate-bounce dark:bg-slate-800/20 ring-1 ring-slate-900/5 dark:ring-slate-200/20' onClick={() => missionScroll()} >
            <svg className="w-6 h-6 text-matrix_green_btn" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
      </div>

      <video
        autoPlay
        className='absolute top-0 z-10 w-auto bg-fixed bg-center bg-cover lg:h-auto md:h-3/4 lg:min-w-full lg:min-h-full max-w-none '
        loop
        muted
      >
        <source src='/assets/matrixRain.mp4' />
      </video>
    </header>
  );
};

export default Hero;
