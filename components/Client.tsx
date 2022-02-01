import React from 'react';
import { clients } from '../constants/data';
import Image from 'next/image';

const Client = () => {
  return (
    <div className="p-8 mx-auto lg:max-w-6xl md:max-w-2xl">
      <div className='md:mt-24 mt-10 lg:max-w-[30rem] md:max-w-xs'>
        <h3 className='text-2xl leading-tight text-white lg:text-6xl md:text-4xl'>We Work for Companies you Trust</h3>
      </div>
      <div className='relative grid grid-cols-2 gap-2 mt-16 shadow-lg lg:gap-4 md:gap-3 lg:grid-cols-4 backdrop-blur-3xl'>
        {clients.map((client, key) => (
          <div key={key} className='flex justify-center col-span-1 py-10 align-middle border-2 border-green-400 hover:rounded-lg hover:bg-teal-100 lg:py-20 md:py-10 backdrop-blur-3xl'>
            <Image
              src={client.image_path}
              alt='sample client'
              width="70"
              height="20"
              layout="intrinsic"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
