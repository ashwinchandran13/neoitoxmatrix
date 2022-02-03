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
      <div className='grid gap-6 sm:grid-rows-1 lg:grid-cols-3 md:grid-cols-3'>
          <div className='w-full h-full sm:row-span-1 lg:col-span-2 md:col-span-2'>
            <Image 
              src={image_path}
              alt={name}
              className='object-cover w-full'
              width="400px"
              height="280px"
              layout='responsive'
            />
          </div>
          <div className='flex flex-col self-start justify-center align-top sm:row-span-1 lg:col-span-1 md:col-span-1'>
            <h4 className='text-2xl text-left text-white lg:text-4xl md:3xl'>{name}: {title}</h4>
            <p className='mt-4 leading-loose text-left text-white lg:mt-8 md:mt-6 '>{description}</p>            
          </div>
      </div>
  );
};

export default ProductCard;
