import React from 'react';
import { clients } from '../constants/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, viewPort } from '../animations';

const Client = () => {
  return (
    <motion.div variants={fadeInUp} initial="initial" whileInView="animate" className="p-8 mx-auto lg:max-w-6xl md:max-w-2xl ">
      <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={viewPort} className='md:mt-24 mt-10 lg:max-w-[30rem] md:max-w-xs'>
        <h3 className='text-2xl leading-tight text-white lg:text-6xl md:text-4xl'>We Work for Companies you Trust</h3>
      </motion.div>
      <motion.div variants={stagger} whileInView="animate" initial="initial" viewport={viewPort}  className='relative grid grid-cols-2 gap-2 mt-16 shadow-lg lg:gap-4 md:gap-3 lg:grid-cols-4 backdrop-blur-3xl'>
        {clients.map((client, key) => (
          <motion.div key={key} variants={fadeInUp} className='flex justify-center col-span-1 py-10 align-middle border-2 border-green-400 hover:rounded-xl hover:bg-white hover:border-black lg:py-20 md:py-10 backdrop-blur-3xl'>
            <Image
              src={client.image_path}
              alt='sample client'
              className='drop-shadow-md'
              width="70"
              height="20"
              layout="intrinsic"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Client;
