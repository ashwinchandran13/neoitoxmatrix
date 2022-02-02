import React, { FunctionComponent } from 'react';
import { IProducts } from '../type';
import Image from 'next/image';

const ProductCard:FunctionComponent<{
    product: IProducts,
}> = ({
    product: {
        id,
        name,
        title,
        description,
        image_path
    }
}) => {
  return (
      <div className='grid grid-rows-2 gap-6 lg:grid-cols-3 md:grid-cols-3'>
          <div className='w-full h-full row-span-1 lg:col-span-2 md:col-span-2'>
            <Image 
              src={image_path}
              alt={name}
              className='w-full object-con'
              width="400px"
              height="300px"
              layout='responsive'
            />
          </div>
          <div className='flex flex-col self-start justify-center row-span-1 align-top lg:col-span-1 md:col-span-1'>
            <h4 className='text-2xl text-left text-white lg:text-4xl md:3xl'>{name}: {title}</h4>
            <p className='mt-4 leading-loose text-left text-white lg:mt-8 md:mt-6 '>{description}</p>            
          </div>
      </div>
  );
};

export default ProductCard;
