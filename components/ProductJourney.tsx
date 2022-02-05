import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { dashInUp, fadeInUp, slideInRight, slideInUp, viewPort } from '../animations';
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
    <motion.div variants={fadeInUp} initial="initial" whileInView="animate" className='h-screen px-8 pt-10 mx-auto lg:max-w-6xl md:max-w-2xl md:pt-24'>
      <motion.div variants={fadeInUp} whileInView="animate" initial="initial" viewport={viewPort} className=' lg:max-w-[30rem] md:max-w-xs mb-14'>
        <h3 className='text-2xl leading-tight text-white lg:text-6xl md:text-4xl'>Product Journey</h3>
      </motion.div>
      <ProductNavbar handleFilterProduct={handleFilterProduct} active={active} />
      <motion.div variants={fadeInUp} whileInView="animate" initial="initial" viewport={viewPort}  className='relative my-24'>
        {products.map((product) => (
          <motion.div variants={dashInUp} initial="initial" animate="animate" key={product.id} >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProductJourney;
