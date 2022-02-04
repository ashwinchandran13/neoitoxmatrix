import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { fadeInUp, viewPort } from '../animations';
import { Product } from '../type';

export const NavItem:FunctionComponent<{value: Product, handleFilterProduct: Function, active: string}> = ({value, handleFilterProduct, active}) => {
    let className = "cursor-pointer text-white/50 hover:text-white before:top-border";
    if (active === value) {
        className = "cursor-pointer text-matrix_green_btn before:top-border-active"
    }
    return <li className={className} onClick={() => handleFilterProduct(value)}>{value}</li>
}

const ProductNavbar:FunctionComponent<{handleFilterProduct: Function, active: string}> = (props) => {
  return (
      <motion.div variants={fadeInUp} whileInView="animate" initial="initial" viewport={viewPort} className='flex justify-between py-2 space-x-4 overflow-x-auto list-none border-t-2 border-white/50'>
        <NavItem value='Enterprise Architecture' {...props}/>
        <NavItem value='System Programming' {...props}/>
        <NavItem value='Web & Mobile' {...props}/>
        <NavItem value='Machine Learning' {...props}/>
        <NavItem value='3D Rendering' {...props}/>
        <NavItem value='Data Analytics' {...props}/>
      </motion.div>
  );
};

export default ProductNavbar;
