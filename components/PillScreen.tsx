import React, { FunctionComponent } from 'react';
import { screen } from '../type';
import Image from 'next/image';
import redPill from '../public/assets/images/red-pill.png';
import bluePill from '../public/assets/images/blue-pill.png';
import { motion } from 'framer-motion';
import { easeIn } from '../animations';

const PillScreen: FunctionComponent<{ setScreen: Function }> = ({ setScreen }) => {
    return (
        <motion.div variants={easeIn} initial="initial" animate="animate" exit="exit" className='relative grid justify-center w-full h-full min-h-[30vh] grid-cols-2 gap-24 place-content-center'>
            <motion.h3 variants={easeIn} initial="initial" exit="exit" animate="animate" className='absolute left-0 right-0 ml-auto mr-auto text-lg leading-tight text-black w-fit top-1/2 md:top-1/4 lg:top-1/4 md:text-6xl'>SO RABBIT HOLE OR WONDERLAND?</motion.h3>
            <motion.div variants={easeIn} initial="initial" exit="exit" animate="animate" className='col-span-1 duration-500 cursor-pointer hover:-translate-y-6 lg:justify-self-end md:justify-self-end drop-shadow-2xl ' onClick={() => setScreen('rabbit hole')}>
                <Image 
                    src={redPill}
                    alt='red pill'
                    height="150px"
                    width="50px"
                    layout="intrinsic"
                />
            </motion.div>
            <motion.div variants={easeIn} initial="initial" exit="exit" animate="animate" className='col-span-1 duration-500 cursor-pointer hover:-translate-y-6 lg:justify-self-start md:justify-self-start justify-self-end drop-shadow-2xl' onClick={() => setScreen('wonderland')}>
                <Image 
                    src={bluePill}
                    alt='blue pill'
                    height="150"
                    width="50px"
                    layout="intrinsic"
                />
            </motion.div>
        </motion.div>
    );
};

export default PillScreen;
