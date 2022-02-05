import React, { FunctionComponent, useState, useEffect } from 'react';
import Image from 'next/image'
import neoitoLogo from '../public/assets/images/logo-neoito.png'
import { headers } from '../constants/data';
import { motion, useViewportScroll } from 'framer-motion';
import { headerSlide } from '../animations';

const NavBar:FunctionComponent = () => {

  const [menu, setMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange(() => updateScroll())
  });

  const updateScroll = () => {
    if (scrollY?.get() < scrollY?.getPrevious()) {
      setHidden(false);
    } else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
      setHidden(true);
    }
  }  

  return (
    <motion.div variants={headerSlide} animate={hidden ? "animate" : "initial"}  className='z-[1000] fixed w-full bg-matrix_green_header drop-shadow-2xl' id='navbar'>
      <div className="sticky flex justify-between p-4">
        <div className='flex items-center ml-0 lg:ml-20'>
          <svg width="113" height="28" viewBox="0 0 113 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.6691 3.58996V23.7857H63.8809L63.8812 22.1738C65.5142 19.756 66.4678 16.8413 66.4678 13.704C66.4678 10.5666 65.5142 7.65203 63.8812 5.23416L63.8809 3.58996H69.6691ZM40.0529 3.57349C38.9535 4.79538 38.05 6.1971 37.392 7.72916L29.9922 7.72935V11.1735L36.3787 11.1733C36.2404 11.9963 36.1684 12.8417 36.1684 13.704C36.1684 14.115 36.1847 14.5221 36.2169 14.9248H29.9922V19.7271L37.413 19.7274C38.0575 21.2135 38.9332 22.5761 39.9949 23.7697L24.2686 23.7694V3.57379L40.0529 3.57349ZM102.911 3.58996C108.483 3.58996 113 8.10729 113 13.6797C113 19.2522 108.483 23.7694 102.911 23.7694C97.3391 23.7694 92.8221 19.2522 92.8221 13.6797C92.8221 8.10729 97.3391 3.58996 102.911 3.58996ZM7.00086 3.57379L15.3599 15.2401V3.57379H20.8247V23.7694H14.996L5.47296 10.0739V23.7694H0V3.57379H7.00086ZM102.919 8.10101C99.834 8.10101 97.333 10.6022 97.333 13.6877C97.333 16.7731 99.834 19.2744 102.919 19.2744C106.004 19.2744 108.505 16.7731 108.505 13.6877C108.505 10.6022 106.004 8.10101 102.919 8.10101ZM93.2585 3.58996V7.72935H73.1937V3.58996H93.2585Z" fill="white" />
            <path d="M86.1285 7.63208H80.3402V23.7694H86.1285V7.63208Z" fill="white" />
            <path d="M54.4393 6.13L56.0741 2.21596C60.7259 4.08328 64.0105 8.63571 64.0105 13.9554C64.0105 20.939 58.3498 26.6002 51.3669 26.6002C49.9392 26.6002 48.5668 26.3636 47.2868 25.9273L50.2438 22.2999C50.6142 22.3497 50.9924 22.3755 51.3766 22.3755C56.0211 22.3755 59.7862 18.6101 59.7862 13.9652C59.7862 10.401 57.5693 7.35463 54.4393 6.13ZM51.7079 5.56124C51.5979 5.55698 51.4876 5.55483 51.3766 5.55483C46.7322 5.55483 42.9671 9.32027 42.9671 13.9652C42.9671 17.475 45.117 20.4828 48.1716 21.7432L46.2489 25.5215C41.8158 23.5566 38.7232 19.1172 38.7232 13.9554C38.7232 6.97183 44.384 1.31055 51.3669 1.31055C52.5495 1.31055 53.6943 1.47293 54.78 1.77662L51.7079 5.56124Z" fill="white" />
            <path d="M45.9469 13.3638L56.6429 0L51.5648 12.0419L57.1977 13.3638L45.705 27.2919L52.2068 14.6818L45.9469 13.3638Z" fill="white" />
          </svg>
        </div>
        <div className='hidden md:flex'>
          <div className='flex justify-between md:space-x-6 lg:space-x-10'>
            {headers.map((header) => (
              <span className='flex items-center text-lg font-medium text-white' key={header.name}>
                <a href='' className='hover:border-b-4 hover:border-matrix_green_btn'>{header.name}</a>
              </span>
            ))}
          </div>
        </div>
        <div className='items-center hidden md:flex'>
          <button className='px-5 py-2 hover:shadow-lg bg-matrix_green_btn hover:shadow-matrix_green_btn/30 focus:outline-none'>
            <span className='flex items-center font-medium text-black'>Lets Talk</span>
          </button>
        </div>
        <div className='flex items-center md:hidden' onClick={() => setMenu(!menu)}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {menu && (
        <div>
          {headers.map((header) => (
            <a href='' key={header.name} className='block px-4 py-2 text-white hover:bg-matrix_green_btn hover:text-black hover:border-matrix_green_btn'>{header.name}</a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default NavBar;
