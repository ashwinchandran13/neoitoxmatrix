import React, { useState } from 'react';

const Domains = () => {

  const [maskStyle, setMaskStyle] = useState('mask-bg');

  return (
    <div className='box-border relative object-cover p-0 m-0'>
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
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="50%" y="50%" textAnchor='middle'>DOMAINS</text>
        </mask>
        <mask id="vr">
          {/* <rect fill='white' width="100%" height="100%"></rect>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="50%" y="50%" textAnchor='middle'>VR</text> */}
          <rect fill='white' width="100%" height="100%"></rect>
          <mask id="vrMask" x="0" y="0" width="1" height="1" >
            <rect width="100%" height="100%" fill='white'/>
          </mask>
          <g transform="translate(780.522 -106.821)" className='internal-vr'>
            <path d="M62.649,430.7a18.075,18.075,0,0,0,2.809,8.7l5.192,8.124a19.482,19.482,0,0,0,16.415,8.991h8.869a19.481,19.481,0,0,0,16.415-8.991l5.193-8.124a18.084,18.084,0,0,0,2.808-8.7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            <path d="M62.85,399.275a24.227,24.227,0,0,1,24.018-20.954h9.273a24.226,24.226,0,0,1,24.009,20.954" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            <path d="M57.446,402.162v25.429a2.891,2.891,0,0,0,2.639,2.88l16.157,1.414a6.482,6.482,0,0,0,5.263-1.993l6.588-6.934a4.7,4.7,0,0,1,6.814,0l6.588,6.934a6.48,6.48,0,0,0,5.263,1.993l16.157-1.414a2.891,2.891,0,0,0,2.639-2.88V402.162a2.892,2.892,0,0,0-2.891-2.891H60.337A2.891,2.891,0,0,0,57.446,402.162Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            <path d="M115,405.281H68a3.087,3.087,0,1,0,0,6.175H115a3.087,3.087,0,1,0,0-6.175Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            <path d="M53.432,408.369a.518.518,0,0,0-.518.518V422.9a.518.518,0,0,0,.518.518h4.014V408.369Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            <path d="M129.568,423.422a.518.518,0,0,0,.518-.518V408.887a.518.518,0,0,0-.518-.518h-4.014v15.053Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            <path d="M75.65,452.923v9.79a4.222,4.222,0,0,1-2.755,3.958l-29.946,11.1a12.148,12.148,0,0,0-7.927,11.391v4.021H147.978v-4.021a12.148,12.148,0,0,0-7.927-11.391l-29.946-11.1a4.222,4.222,0,0,1-2.755-3.958v-9.79" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          </g>
            <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="50%" y="50%" textAnchor='middle'>_VR/AR</text>
        </mask>
        
        <rect width="100%" fill="url('#radial-matrix-bg')" height="100%" className={maskStyle}></rect>
      </svg>
      <div className='absolute grid w-full h-full place-items-center top-1'>
        <div className='flex space-x-[4.5rem]'>
          <div className='block p-2 cursor-pointer bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => {setMaskStyle('mask-vr'); console.log('entered')}} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='text-2xl font-bold text-black font-matrixCode'>!</h1>
          </div>
          <div className='block p-2 cursor-pointer bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => {setMaskStyle('mask-vr'); console.log('entered')}} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='text-2xl font-bold text-black font-matrixCode'>(</h1>
          </div>
          <div className='block p-2 cursor-pointer bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => {setMaskStyle('mask-vr'); console.log('entered')}} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='text-2xl font-bold text-black font-matrixCode'>#</h1>
          </div>
          <div className='block p-2 cursor-pointer bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => {setMaskStyle('mask-vr'); console.log('entered')}} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='text-2xl font-bold text-black font-matrixCode'>$</h1>
          </div>
          <div className='block p-2 cursor-pointer bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => {setMaskStyle('mask-vr'); console.log('entered')}} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='text-2xl font-bold text-black font-matrixCode'>%</h1>
          </div>
          <div className='block p-2 cursor-pointer bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => {setMaskStyle('mask-vr'); console.log('entered')}} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='text-2xl font-bold text-black font-matrixCode'>-</h1>
          </div>
          <div className='block p-2 cursor-pointer bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => {setMaskStyle('mask-vr'); console.log('entered')}} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='text-2xl font-bold text-black font-matrixCode'>)</h1>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Domains;
