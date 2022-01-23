import React from 'react';
import Image from 'next/image'
import neoitoLogo from '../public/assets/images/neoito-logo.png'
import { headers } from '../constants/data';

const NavBar = () => {
    
  return (
      
    <div className="grid grid-cols-12 bg-matrix_green_header p-4">
        <div className='col-start-2 col-end-5'>
          <span className='flex items-center font-bold text-3xl p-1 tracking-widest text-white font-matrixFont mr-6'>
            Ne
          <Image 
            src={neoitoLogo.src}
            alt='neoito logo'
            quality="100"
            width="40"
            height="40"
            layout='intrinsic'
          />
          ito
          </span>
        </div>
        <div className='col-start-6 col-end-11'>
            <div className='grid gap-1 lg:grid-cols-6 h-full'>
                {headers.map((header) => (
                    <span className='text-white font-medium text-lg col-span-1 flex items-center' key={header.name}>
                        <a href='' >{header.name}</a>
                    </span>
                ))}
            </div>
        </div>
        <div className='col-span-1  flex flex-row-reverse items-center'>
            <button className='bg-matrix_green_btn focus:outline-none px-5 py-2'>
                <span className='text-black font-medium flex items-center'>Lets Talk</span>
            </button>
        </div>
  </div>
  );
};

export default NavBar;
