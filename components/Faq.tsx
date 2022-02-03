import React from 'react';
import { faqs } from '../constants/data';
import FaqCard from './FaqCard';

const Faq = () => {
    return (
        <div className="p-8 mx-auto border-t-2 h-fit lg:max-w-6xl md:max-w-2xl ">
            {faqs.map((item) => <FaqCard key={item.title} faq={item}/>)}
        </div>
    );
};

export default Faq;
