import { motion } from 'framer-motion';
import React from 'react';
import { slideInUp, viewPort } from '../animations';
import { faqs } from '../constants/data';
import FaqCard from './FaqCard';

const Faq = () => {
    return (
        <motion.div variants={slideInUp} initial="initial" whileInView="animate" viewport={viewPort} className="p-8 mx-auto border-t-2 h-fit lg:max-w-6xl md:max-w-2xl ">
            {faqs.map((item) => <FaqCard key={item.title} faq={item}/>)}
        </motion.div>
    );
};

export default Faq;
