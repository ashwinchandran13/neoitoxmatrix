import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp, stagger, viewPort } from '../animations';
import { faqs } from '../constants/data';
import FaqCard from './FaqCard';

const Faq = () => {
    return (
        <motion.div variants={stagger} initial="initial" whileInView="animate" className="px-8 pt-10 mx-auto md:pt-24 h-fit lg:max-w-6xl md:max-w-2xl ">
            {faqs.map((item) => (
                <motion.div variants={fadeInUp} key={item.title}>
                    <FaqCard key={item.title} faq={item}/>
                </motion.div>
                )
            )}
        </motion.div>
    );
};

export default Faq;
