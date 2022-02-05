import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { draw, easeIn } from '../animations';

const RabbitHole: FunctionComponent<{ setScreen: Function }> = ({ setScreen }) => {
    return (
        <div className='grid justify-center w-full h-full grid-cols-1 p-4 lg:grid-cols-2 md:grid-cols-2 place-content-center place-items-center'>
            <motion.div variants={easeIn} initial="initial" animate="animate" exit="exit" className='relative w-full h-full p-0 mx-0 md:col-span-1'>
                <video
                    autoPlay
                    className='object-cover w-full h-full mx-auto overflow-hidden'
                    // className='w-auto bg-fixed bg-center bg-cover lg:h-auto md:h-3/4 lg:min-w-full lg:min-h-full max-w-none aspect-[6/2]'
                    loop
                    muted
                    src='/assets/matrixRain.mp4'
                />
                <svg className='absolute top-0 left-0 w-full h-full '>
                    <mask id='neoito'>
                        <rect fill='white' width="120%" height="120%"></rect>
                        <motion.svg initial="hidden" animate="visible" width="100%" height="100%" viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
                            <motion.path variants={draw} custom={3} d="M16.4393 6.13L18.0741 2.21596C22.7259 4.08328 26.0105 8.63571 26.0105 13.9554C26.0105 20.939 20.3498 26.6002 13.3669 26.6002C11.9392 26.6002 10.5668 26.3636 9.28676 25.9273L12.2438 22.2999C12.6142 22.3497 12.9924 22.3755 13.3766 22.3755C18.0211 22.3755 21.7862 18.6101 21.7862 13.9652C21.7862 10.401 19.5693 7.35463 16.4393 6.13ZM13.7079 5.56124C13.5979 5.55698 13.4876 5.55483 13.3766 5.55483C8.73218 5.55483 4.96711 9.32027 4.96711 13.9652C4.96711 17.475 7.11701 20.4828 10.1716 21.7432L8.24893 25.5215C3.81576 23.5566 0.723236 19.1172 0.723236 13.9554C0.723236 6.97183 6.38396 1.31055 13.3669 1.31055C14.5495 1.31055 15.6943 1.47293 16.78 1.77662L13.7079 5.56124Z" fill="#000" />
                            <motion.path variants={draw} custom={1} d="M7.94691 13.3638L18.6429 0L13.5648 12.0419L19.1977 13.3638L7.70502 27.2919L14.2068 14.6818L7.94691 13.3638Z" fill="#000" />
                        </motion.svg>
                        {/* <svg width="100%" height="100%" viewBox="0 0 113 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M69.6691 3.58996V23.7857H63.8809L63.8812 22.1738C65.5142 19.756 66.4678 16.8413 66.4678 13.704C66.4678 10.5666 65.5142 7.65203 63.8812 5.23416L63.8809 3.58996H69.6691ZM40.0529 3.57349C38.9535 4.79538 38.05 6.1971 37.392 7.72916L29.9922 7.72935V11.1735L36.3787 11.1733C36.2404 11.9963 36.1684 12.8417 36.1684 13.704C36.1684 14.115 36.1847 14.5221 36.2169 14.9248H29.9922V19.7271L37.413 19.7274C38.0575 21.2135 38.9332 22.5761 39.9949 23.7697L24.2686 23.7694V3.57379L40.0529 3.57349ZM102.911 3.58996C108.483 3.58996 113 8.10729 113 13.6797C113 19.2522 108.483 23.7694 102.911 23.7694C97.3391 23.7694 92.8221 19.2522 92.8221 13.6797C92.8221 8.10729 97.3391 3.58996 102.911 3.58996ZM7.00086 3.57379L15.3599 15.2401V3.57379H20.8247V23.7694H14.996L5.47296 10.0739V23.7694H0V3.57379H7.00086ZM102.919 8.10101C99.834 8.10101 97.333 10.6022 97.333 13.6877C97.333 16.7731 99.834 19.2744 102.919 19.2744C106.004 19.2744 108.505 16.7731 108.505 13.6877C108.505 10.6022 106.004 8.10101 102.919 8.10101ZM93.2585 3.58996V7.72935H73.1937V3.58996H93.2585Z" fill="black" />
                            <path d="M86.1285 7.63208H80.3402V23.7694H86.1285V7.63208Z" fill="black" />
                            <path d="M54.4393 6.13L56.0741 2.21596C60.7259 4.08328 64.0105 8.63571 64.0105 13.9554C64.0105 20.939 58.3498 26.6002 51.3669 26.6002C49.9392 26.6002 48.5668 26.3636 47.2868 25.9273L50.2438 22.2999C50.6142 22.3497 50.9924 22.3755 51.3766 22.3755C56.0211 22.3755 59.7862 18.6101 59.7862 13.9652C59.7862 10.401 57.5693 7.35463 54.4393 6.13ZM51.7079 5.56124C51.5979 5.55698 51.4876 5.55483 51.3766 5.55483C46.7322 5.55483 42.9671 9.32027 42.9671 13.9652C42.9671 17.475 45.117 20.4828 48.1716 21.7432L46.2489 25.5215C41.8158 23.5566 38.7232 19.1172 38.7232 13.9554C38.7232 6.97183 44.384 1.31055 51.3669 1.31055C52.5495 1.31055 53.6943 1.47293 54.78 1.77662L51.7079 5.56124Z" fill="#000" />
                            <path d="M45.9469 13.3638L56.6429 0L51.5648 12.0419L57.1977 13.3638L45.705 27.2919L52.2068 14.6818L45.9469 13.3638Z" fill="#000" />
                        </svg> */}
                    </mask>
                    {/* <svg width="100%" height="100%" viewBox="0 0 113 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M69.6691 3.58996V23.7857H63.8809L63.8812 22.1738C65.5142 19.756 66.4678 16.8413 66.4678 13.704C66.4678 10.5666 65.5142 7.65203 63.8812 5.23416L63.8809 3.58996H69.6691ZM40.0529 3.57349C38.9535 4.79538 38.05 6.1971 37.392 7.72916L29.9922 7.72935V11.1735L36.3787 11.1733C36.2404 11.9963 36.1684 12.8417 36.1684 13.704C36.1684 14.115 36.1847 14.5221 36.2169 14.9248H29.9922V19.7271L37.413 19.7274C38.0575 21.2135 38.9332 22.5761 39.9949 23.7697L24.2686 23.7694V3.57379L40.0529 3.57349ZM102.911 3.58996C108.483 3.58996 113 8.10729 113 13.6797C113 19.2522 108.483 23.7694 102.911 23.7694C97.3391 23.7694 92.8221 19.2522 92.8221 13.6797C92.8221 8.10729 97.3391 3.58996 102.911 3.58996ZM7.00086 3.57379L15.3599 15.2401V3.57379H20.8247V23.7694H14.996L5.47296 10.0739V23.7694H0V3.57379H7.00086ZM102.919 8.10101C99.834 8.10101 97.333 10.6022 97.333 13.6877C97.333 16.7731 99.834 19.2744 102.919 19.2744C106.004 19.2744 108.505 16.7731 108.505 13.6877C108.505 10.6022 106.004 8.10101 102.919 8.10101ZM93.2585 3.58996V7.72935H73.1937V3.58996H93.2585Z" fill="black" />
                        <path d="M86.1285 7.63208H80.3402V23.7694H86.1285V7.63208Z" fill="black" />
                        <path d="M54.4393 6.13L56.0741 2.21596C60.7259 4.08328 64.0105 8.63571 64.0105 13.9554C64.0105 20.939 58.3498 26.6002 51.3669 26.6002C49.9392 26.6002 48.5668 26.3636 47.2868 25.9273L50.2438 22.2999C50.6142 22.3497 50.9924 22.3755 51.3766 22.3755C56.0211 22.3755 59.7862 18.6101 59.7862 13.9652C59.7862 10.401 57.5693 7.35463 54.4393 6.13ZM51.7079 5.56124C51.5979 5.55698 51.4876 5.55483 51.3766 5.55483C46.7322 5.55483 42.9671 9.32027 42.9671 13.9652C42.9671 17.475 45.117 20.4828 48.1716 21.7432L46.2489 25.5215C41.8158 23.5566 38.7232 19.1172 38.7232 13.9554C38.7232 6.97183 44.384 1.31055 51.3669 1.31055C52.5495 1.31055 53.6943 1.47293 54.78 1.77662L51.7079 5.56124Z" fill="#000" />
                        <path d="M45.9469 13.3638L56.6429 0L51.5648 12.0419L57.1977 13.3638L45.705 27.2919L52.2068 14.6818L45.9469 13.3638Z" fill="#000" />
                    </svg> */}
                    <rect width="100%" fill="white" height="100%" className='mask-neoito'></rect>
                </svg>
            </motion.div>
            <motion.div variants={easeIn} initial="initial" animate="animate" exit="exit" className='flex flex-col col-span-1 p-14 justify-self-center'>
                <h3 className='text-2xl leading-tight text-center text-black md:text-5xl'>Are you the one?</h3>
                <div className='mt-12 text-lg leading-loose tracking-normal text-justify text-black md:text-xl'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>We're stunned by the minds who took us forward. We're even more amused to where you could take us. Join the Neoito cause today.</p>
                </div>
                <div className='grid grid-cols-2 gap-6 mt-10'>
                    <button className='px-8 py-3 text-xs font-semibold text-white shadow-lg md:text-base shadow-matrix_green_header/30 hover:shadow-matrix_green_btn/30 bg-matrix_green_header hover:bg-matrix_green_btn hover:text-black'>Work With Us Neo</button>
                    <button className='px-8 py-3 text-xs font-semibold text-black border-4 border-black shadow-lg md:text-base shadow-black/30 hover:bg-black hover:text-white' onClick={() => setScreen('pill screen')}>Not the one?</button>
                </div>
            </motion.div>
        </div>
    );
};

export default RabbitHole;
