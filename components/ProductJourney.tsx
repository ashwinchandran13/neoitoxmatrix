import Image from 'next/image';
import React, { useState } from 'react';
import { products as productsData } from '../constants/data';
import { Product } from '../type';
import ProductCard from './ProductCard';
import ProductNavbar from './ProductNavbar';

const ProductJourney = () => {
  const [products, setProducts] = useState(productsData.filter(productsData => productsData.name === 'Enterprise Architecture'));
  const [active, setActive] = useState('Enterprise Architecture');

  const handleFilterProduct = (product: Product) => {
    const newArray = productsData.filter(productData => productData.name === product);
    setProducts(newArray);
    setActive(product);
  }

  return (
    <div className='h-screen p-8 mx-auto lg:max-w-6xl md:max-w-2xl '>
      <div className='md:mt-24 mt-10 lg:max-w-[30rem] md:max-w-xs mb-14'>
        <h3 className='text-2xl leading-tight text-white lg:text-6xl md:text-4xl'>Product Journey</h3>
      </div>
      <ProductNavbar handleFilterProduct={handleFilterProduct} active={active} />
      <div className='relative my-24'>
        {products.map((product) => (
          <div key={product.id} >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductJourney;
