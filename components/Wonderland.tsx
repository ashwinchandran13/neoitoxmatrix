import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { easeIn, slideInRight } from '../animations';

const Wonderland:FunctionComponent<{setScreen: Function}> = ({setScreen}) => {
  return (
      <motion.div variants={easeIn} initial="initial" animate="animate" exit="exit" className='flex justify-center w-full lg:h-full md:h-full min-h-[30vh] place-items-center'>
        <motion.h3 variants={easeIn} animate="animate" initial="initial" exit="exit" className='text-2xl leading-tight text-black lg:text-6xl md:text-4xl '>Hey Alice, want out?</motion.h3>
        <motion.button variants={slideInRight} animate="animate" initial="initial" exit="exit"  className='p-2 ml-2 text-2xl text-black duration-500 delay-100 md:text-4xl lg:text-6xl font-matrixCode bg-matrix_green_btn shadow-matrix_green_btn hover:drop-shadow-2xl hover:scale-110' onClick={() => setScreen('pill screen')}>01</motion.button>
      </motion.div>
  );
};

export default Wonderland;
