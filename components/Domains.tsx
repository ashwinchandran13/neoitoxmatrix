import React, { useState } from 'react';

const Domains = () => {

  const [maskStyle, setMaskStyle] = useState('mask-ai');

  return (
    <div className='box-border relative object-cover p-0 m-0'>
      <video
        autoPlay
        className='w-full object-cover lg:h-[78vh] md:h-[50vh] h-32 mx-auto overflow-hidden'
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
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl text-8xl ' dominantBaseline="central" x="50%" y="50%" textAnchor='middle'>DOMAINS</text>
        </mask>
        
        <mask id="vr">
          <rect fill='white' width="100%" height="100%" ></rect>
          <svg width="100%" height="100%" viewBox="-100.95 -5 100.858 130.858" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-33.522 -376.821)">
                <path d="M62.649,430.7a18.075,18.075,0,0,0,2.809,8.7l5.192,8.124a19.482,19.482,0,0,0,16.415,8.991h8.869a19.481,19.481,0,0,0,16.415-8.991l5.193-8.124a18.084,18.084,0,0,0,2.808-8.7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M62.85,399.275a24.227,24.227,0,0,1,24.018-20.954h9.273a24.226,24.226,0,0,1,24.009,20.954" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M57.446,402.162v25.429a2.891,2.891,0,0,0,2.639,2.88l16.157,1.414a6.482,6.482,0,0,0,5.263-1.993l6.588-6.934a4.7,4.7,0,0,1,6.814,0l6.588,6.934a6.48,6.48,0,0,0,5.263,1.993l16.157-1.414a2.891,2.891,0,0,0,2.639-2.88V402.162a2.892,2.892,0,0,0-2.891-2.891H60.337A2.891,2.891,0,0,0,57.446,402.162Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M115,405.281H68a3.087,3.087,0,1,0,0,6.175H115a3.087,3.087,0,1,0,0-6.175Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M53.432,408.369a.518.518,0,0,0-.518.518V422.9a.518.518,0,0,0,.518.518h4.014V408.369Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M129.568,423.422a.518.518,0,0,0,.518-.518V408.887a.518.518,0,0,0-.518-.518h-4.014v15.053Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M75.65,452.923v9.79a4.222,4.222,0,0,1-2.755,3.958l-29.946,11.1a12.148,12.148,0,0,0-7.927,11.391v4.021H147.978v-4.021a12.148,12.148,0,0,0-7.927-11.391l-29.946-11.1a4.222,4.222,0,0,1-2.755-3.958v-9.79" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </g>
          </svg>
          <svg width="100%" height="100%" viewBox="80.28 -5 129.673 130.673" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-400.607 -375.914)">
                <rect width="68.12" height="116.673" rx="6.232" transform="translate(402.107 377.414)" strokeWidth="3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x2="68.12" transform="translate(402.107 392.73)" strokeWidth="3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x2="68.12" transform="translate(402.107 478.77)" strokeWidth="3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x2="6.249" transform="translate(429.596 385.395)" strokeWidth="3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x2="1.607" transform="translate(441.131 385.395)" strokeWidth="3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x2="9.789" transform="translate(431.272 486.405)" strokeWidth="3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M450.229,449.409V433.171l-14.062-8.119L422.1,433.171v16.238l14.062,8.119Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M422.1,433.171l14.062,8.119,14.062-8.119" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <line y1="16.238" transform="translate(436.167 441.29)" strokeWidth="3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M440.272,417.927c13.4,1.065,23.678,7.26,23.678,14.743,0,8.231-12.439,14.9-27.783,14.9s-27.784-6.673-27.784-14.9c0-8.1,12.031-14.683,27.024-14.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d="M432.153,413.972l3.253,3.8-3.253,3.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </g>
          </svg>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="50%" y="50%" textAnchor='middle'>AR/VR</text>
        </mask>

        <mask id="ai">
          <rect fill='white' width="100%" height="100%" ></rect>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%"  viewBox="200 -48 1200 600" xmlSpace="preserve">
	          <g>
	          	<g>
	          		<path d="M409.55,70.347C374.452,24.326,321.356,0,256,0c-65.356,0-118.452,24.326-153.549,70.347
	          		c-30.209,39.611-46.177,93.382-46.177,155.5c0,67.981,19.424,137.928,53.291,191.905C147.701,478.529,199.706,512,256,512
	          		s108.3-33.471,146.434-94.248c33.868-53.977,53.291-123.923,53.291-191.905C455.726,163.729,439.758,109.958,409.55,70.347z
	          		 M119.775,365.971l38.521,6.948l9.294,65.003C148.515,418.707,132.353,393.859,119.775,365.971z M239.304,381.505h-33.776v33.391
	          		h33.776v62.386c-11.848-1.871-23.193-5.7-33.959-11.205L187.94,344.336l-82.026-14.795
	          		c-10.513-33.336-16.248-69.084-16.248-103.693c0-47.361,10.765-90.154,30.551-122.404v49.54h33.391V65.389
	          		c10.576-8.396,22.332-15.141,35.224-20.241v95.992l50.472,28.57V381.505z M239.304,131.34l-17.081-9.669V36.038
	          		c5.535-0.912,11.232-1.583,17.081-2.022V131.34z M272.696,34.016c5.85,0.44,11.546,1.111,17.081,2.022v85.633l-17.081,9.669
	          		V34.016z M344.411,437.921l9.294-65.003l38.521-6.949C379.647,393.859,363.485,418.707,344.411,437.921z M324.061,344.334
	          		l-17.406,121.741c-10.766,5.505-22.112,9.335-33.96,11.206v-62.386h33.776v-33.391h-33.776V169.71l50.472-28.571V45.147
	          		c12.892,5.1,24.648,11.846,35.224,20.241v87.596h33.391v-49.54c19.785,32.249,30.551,75.042,30.551,122.403
	          		c0,34.609-5.736,70.359-16.248,103.693L324.061,344.334z" />
	          	</g>
	          </g>
	          <g>
	          	<g>
	          		<path d="M343.335,203.788c-29.668,0-53.806,24.137-53.806,53.806c0,29.669,24.138,53.807,53.806,53.807
	          		c29.669,0,53.807-24.137,53.807-53.807C397.142,227.926,373.004,203.788,343.335,203.788z M343.335,278.009
	          		c-11.256,0-20.414-9.158-20.414-20.415c0-11.256,9.158-20.414,20.414-20.414s20.415,9.158,20.415,20.414
	          		C363.75,268.851,354.591,278.009,343.335,278.009z" />
	          	</g>
	          </g>
	          <g>
	          	<g>
	          		<circle cx="343.329" cy="257.592" r="13.866" />
	          	</g>
	          </g>
	          <g>
	          	<g>
	          		<path d="M168.665,203.788c-29.668,0-53.806,24.138-53.806,53.806c0,29.669,24.137,53.807,53.806,53.807
	          		c29.669,0,53.807-24.138,53.807-53.807C222.472,227.926,198.334,203.788,168.665,203.788z M168.665,278.009
	          		c-11.256,0-20.414-9.158-20.414-20.415c0-11.256,9.158-20.414,20.414-20.414c11.257,0,20.415,9.158,20.415,20.414
	          		C189.08,268.851,179.922,278.009,168.665,278.009z" />
	          	</g>
	          </g>
	          <g>
	          	<g>
	          		<circle cx="168.659" cy="257.592" r="13.866" />
	          	</g>
	          </g>
          </svg>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="-67 0 100 32" xmlSpace="preserve" width="100%" height="100%" >
	          <path id="machine--learning--03_1_" d="M29.36,15.695v-3.389c0.575-0.159,1-0.681,1-1.305c0-0.75-0.61-1.36-1.36-1.36
	          c-0.191,0-0.372,0.04-0.537,0.111l-2.365-2.956C26.261,6.572,26.36,6.298,26.36,6c0-0.75-0.61-1.36-1.36-1.36
	          c-0.401,0-0.758,0.177-1.007,0.454l-3.659-1.83C20.351,3.179,20.36,3.091,20.36,3c0-0.75-0.61-1.36-1.36-1.36
	          c-0.625,0-1.147,0.425-1.306,1h-4.389c-0.159-0.575-0.681-1-1.305-1c-0.75,0-1.36,0.61-1.36,1.36c0,0.091,0.01,0.179,0.027,0.264
	          l-2.66,1.33C7.758,4.318,7.401,4.14,7,4.14c-0.75,0-1.36,0.61-1.36,1.36c0,0.273,0.082,0.526,0.221,0.739L3.598,8.785
	          C3.417,8.695,3.216,8.64,3,8.64c-0.75,0-1.36,0.61-1.36,1.36c0,0.625,0.425,1.146,1,1.305v3.389c-0.575,0.159-1,0.681-1,1.305
	          c0,0.75,0.61,1.36,1.36,1.36c0.546,0,1.014-0.325,1.231-0.791l3.424,0.571C7.726,17.824,8.298,18.36,9,18.36
	          c0.091,0,0.179-0.01,0.264-0.027l0.83,1.659C9.818,20.242,9.64,20.599,9.64,21c0,0.75,0.61,1.36,1.36,1.36
	          c0.47,0,0.885-0.24,1.13-0.604l3.518,1.173C15.646,22.953,15.64,22.976,15.64,23c0,0.625,0.425,1.147,1,1.306v3.388
	          c-0.575,0.159-1,0.681-1,1.306c0,0.75,0.61,1.36,1.36,1.36s1.36-0.61,1.36-1.36c0-0.624-0.425-1.147-1-1.306v-3.389
	          c0.575-0.159,1-0.681,1-1.306c0-0.452-0.224-0.85-0.564-1.098l0.682-1.82l3.163,0.904c0,0.005-0.001,0.01-0.001,0.015
	          c0,0.624,0.425,1.147,1,1.306v5.389c-0.575,0.159-1,0.681-1,1.306c0,0.75,0.61,1.36,1.36,1.36s1.36-0.61,1.36-1.36
	          c0-0.624-0.425-1.147-1-1.306v-5.389c0.575-0.159,1-0.681,1-1.306c0-0.149-0.03-0.29-0.074-0.424l3.828-2.553
	          C28.353,18.231,28.66,18.36,29,18.36c0.75,0,1.36-0.61,1.36-1.36C30.36,16.376,29.935,15.854,29.36,15.695z M21.354,14.932
	          c-0.002-0.045-0.007-0.09-0.014-0.134l3.049-1.355l3.313,2.899L21.354,14.932z M20,15.64c-0.353,0-0.64-0.287-0.64-0.64
	          s0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64S20.353,15.64,20,15.64z M20,13.64c-0.75,0-1.36,0.61-1.36,1.36
	          c0,0.452,0.224,0.85,0.564,1.097l-1.166,3.11l-1.902-0.543l-1.465-5.126l5.463-3.756l0.628,0.489l3.028,2.65l-2.745,1.22
	          C20.796,13.838,20.423,13.64,20,13.64z M9.131,15.653L8.122,9.85l3.612-0.361V9.485C11.93,9.995,12.421,10.36,13,10.36
	          c0.005,0,0.009-0.001,0.014-0.001l0.823,2.879l-3.966,2.726C9.666,15.792,9.412,15.681,9.131,15.653z M13,9.64
	          c-0.353,0-0.64-0.287-0.64-0.64S12.647,8.36,13,8.36S13.64,8.647,13.64,9S13.353,9.64,13,9.64z M10.28,16.557l3.765-2.589
	          l1.275,4.463l-4.962-1.418c0-0.005,0.001-0.009,0.001-0.014C10.36,16.844,10.328,16.697,10.28,16.557z M24.129,7.036
	          C24.366,7.235,24.667,7.36,25,7.36c0.191,0,0.372-0.04,0.537-0.111l2.365,2.955C27.739,10.428,27.64,10.702,27.64,11
	          c0,0.069,0.01,0.135,0.02,0.201l-3.144,1.397l-3.295-2.883l-0.464-0.361L24.129,7.036z M28.251,15.866l-3.138-2.745l2.841-1.262
	          c0.176,0.213,0.412,0.371,0.686,0.446v3.389C28.501,15.733,28.369,15.789,28.251,15.866z M29.64,11c0,0.353-0.287,0.64-0.64,0.64
	          s-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64S29.64,10.647,29.64,11z M25,5.36c0.353,0,0.64,0.287,0.64,0.64S25.353,6.64,25,6.64
	          S24.36,6.353,24.36,6S24.647,5.36,25,5.36z M19,2.36c0.353,0,0.64,0.287,0.64,0.64S19.353,3.64,19,3.64S18.36,3.353,18.36,3
	          S18.647,2.36,19,2.36z M19,4.36c0.401,0,0.758-0.177,1.007-0.454l3.659,1.83C23.649,5.821,23.64,5.909,23.64,6
	          c0,0.156,0.032,0.303,0.08,0.443l-3.56,2.448l-6.904-5.37c0.021-0.051,0.035-0.106,0.05-0.161h4.389
	          C17.853,3.935,18.375,4.36,19,4.36z M12,2.36c0.353,0,0.64,0.287,0.64,0.64S12.353,3.64,12,3.64S11.36,3.353,11.36,3
	          S11.647,2.36,12,2.36z M10.993,3.906C11.242,4.182,11.599,4.36,12,4.36c0.304,0,0.583-0.104,0.81-0.274l6.728,5.232l-5.075,3.489
	          l-0.757-2.65C14.096,9.918,14.36,9.491,14.36,9c0-0.75-0.61-1.36-1.36-1.36c-0.673,0-1.229,0.492-1.337,1.135V8.772L7.998,9.138
	          l-0.42-2.412C8.039,6.508,8.36,6.042,8.36,5.5c0-0.091-0.01-0.179-0.027-0.264L10.993,3.906z M4.265,9.511
	          C4.231,9.423,4.19,9.339,4.139,9.261l2.263-2.546c0.143,0.071,0.3,0.115,0.467,0.132L7.28,9.21L4.265,9.511z M7,4.86
	          c0.353,0,0.64,0.287,0.64,0.64S7.353,6.14,7,6.14S6.36,5.853,6.36,5.5S6.647,4.86,7,4.86z M2.36,10c0-0.353,0.287-0.64,0.64-0.64
	          S3.64,9.647,3.64,10S3.353,10.64,3,10.64S2.36,10.353,2.36,10z M3,16.64c-0.353,0-0.64-0.287-0.64-0.64S2.647,15.36,3,15.36
	          S3.64,15.647,3.64,16C3.64,16.353,3.353,16.64,3,16.64z M7.769,16.43l-3.424-0.571c-0.059-0.561-0.455-1.018-0.986-1.165v-3.389
	          c0.503-0.139,0.888-0.556,0.977-1.077l3.067-0.307l1.018,5.853C8.135,15.91,7.904,16.142,7.769,16.43z M8.36,17
	          c0-0.353,0.287-0.64,0.64-0.64S9.64,16.647,9.64,17S9.353,17.64,9,17.64S8.36,17.353,8.36,17z M11,21.64
	          c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64S11.353,21.64,11,21.64z M12.353,21.071
	          c0.001-0.024,0.007-0.047,0.007-0.071c0-0.75-0.61-1.36-1.36-1.36c-0.091,0-0.179,0.01-0.264,0.027l-0.83-1.659
	          c0.098-0.088,0.182-0.189,0.251-0.302l5.396,1.541l0.742,2.596c-0.168,0.103-0.315,0.238-0.425,0.402L12.353,21.071z M17.64,29
	          c0,0.353-0.287,0.64-0.64,0.64c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64C17.353,28.36,17.64,28.647,17.64,29z M17,23.64
	          c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64c0.353,0,0.64,0.287,0.64,0.64S17.353,23.64,17,23.64z M17.121,21.652
	          C17.08,21.648,17.041,21.64,17,21.64c-0.005,0-0.009,0.001-0.014,0.001l-0.618-2.162l1.416,0.404L17.121,21.652z M18.732,19.406
	          l1.147-3.059c0.041,0.004,0.08,0.012,0.121,0.012c0.519,0,0.967-0.296,1.196-0.725l6.451,1.433c0.006,0.124,0.03,0.243,0.068,0.356
	          l-3.828,2.553C23.647,19.769,23.34,19.64,23,19.64c-0.491,0-0.918,0.264-1.158,0.655L18.732,19.406z M23.64,29
	          c0,0.353-0.287,0.64-0.64,0.64s-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64S23.64,28.647,23.64,29z M23,21.64
	          c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64S23.353,21.64,23,21.64z M29,17.64
	          c-0.353,0-0.64-0.287-0.64-0.64c0-0.353,0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64C29.64,17.353,29.353,17.64,29,17.64z" />
          </svg>
          <text className='font-extrabold tracking-wide lg:text-[10rem] md:text-8xl ' dominantBaseline="central" x="50%" y="50%" textAnchor='middle'>AI/ML</text>
        </mask>

        
        <rect width="100%" fill="url('#radial-matrix-bg')" height="100%" className={maskStyle}></rect>
      </svg>
      <div className='absolute left-0 right-0 flex ml-auto mr-auto w-fit space-x-10 md:space-x-10 top-[5%] lg:top-1/4 md:top-1/4'>
          <div className='block p-1 cursor-pointer lg:p-2 md:p-1 bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => setMaskStyle('mask-vr')} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='font-bold text-black lg:text-2xl md:text-lg sm:text-base font-matrixCode'>!</h1>
          </div>
          <div className='block p-1 cursor-pointer lg:p-2 md:p-1 bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => setMaskStyle('mask-ai')} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='font-bold text-black lg:text-2xl md:text-lg sm:text-base font-matrixCode'>(</h1>
          </div>
          <div className='block p-1 cursor-pointer lg:p-2 md:p-1 bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => setMaskStyle('mask-vr')} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='font-bold text-black lg:text-2xl md:text-lg sm:text-base font-matrixCode'>#</h1>
          </div>
          <div className='block p-1 cursor-pointer lg:p-2 md:p-1 bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => setMaskStyle('mask-vr')} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='font-bold text-black lg:text-2xl md:text-lg sm:text-base font-matrixCode'>$</h1>
          </div>
          <div className='block p-1 cursor-pointer lg:p-2 md:p-1 bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => setMaskStyle('mask-vr')} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='font-bold text-black lg:text-2xl md:text-lg sm:text-base font-matrixCode'>%</h1>
          </div>
          <div className='block p-1 cursor-pointer lg:p-2 md:p-1 bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => setMaskStyle('mask-vr')} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='font-bold text-black lg:text-2xl md:text-lg sm:text-base font-matrixCode'>-</h1>
          </div>
          <div className='block p-1 cursor-pointer lg:p-2 md:p-1 bg-matrix_green_btn drop-shadow-md hover:shadow-matrix_green_btn hover:drop-shadow-none' onMouseEnter={() => setMaskStyle('mask-vr')} onMouseLeave={() => setMaskStyle('mask-bg')}>
            <h1 className='font-bold text-black lg:text-2xl md:text-lg sm:text-base font-matrixCode'>)</h1>
          </div>
      </div>
    </div>
  )
};

export default Domains;
