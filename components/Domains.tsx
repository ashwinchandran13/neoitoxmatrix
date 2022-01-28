import React from 'react';

const Domains = () => {
  return (
    <div className='box-border relative p-0 m-0'>
      <video
        autoPlay
        className='w-full lg:h-[78vh] md:h-[50vh] sm:h-full mx-auto overflow-hidden'
        // className='w-auto bg-fixed bg-center bg-cover lg:h-auto md:h-3/4 lg:min-w-full lg:min-h-full max-w-none aspect-[6/2]'
        loop
        muted
        src='/assets/matrixRain.mp4'
      />
      <svg className='absolute top-0 left-0 w-full lg:h-[78vh] md:h-[50vh] sm:h-full'>
        <defs>
        <linearGradient id='radial-matrix-bg' x1="20%" y1="20%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(101, 222, 138)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(36, 151, 93)" stopOpacity="1" />
        </linearGradient>
        </defs>
        <mask id='mask'>
          <rect fill='white' width="100%" height="100%"></rect>
          <g className='hover:[text-b]'></g>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="30%" y="50%" textAnchor='middle'>D</text>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="36.5%" y="50%" textAnchor='middle'>O</text>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="43%" y="50%" textAnchor='middle'>M</text>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="49.5%" y="50%" textAnchor='middle'>A</text>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="54%" y="50%" textAnchor='middle'>I</text>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="58.5%" y="50%" textAnchor='middle'>N</text>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="64.5%" y="50%" textAnchor='middle'>S</text>

        </mask>
        <rect width="100%" fill="url('#radial-matrix-bg')" height="100%" className='mask-bg'></rect>
      </svg>
    </div>
  )
};

export default Domains;
