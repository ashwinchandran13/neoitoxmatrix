import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { dashInUp, fadeInUp } from '../animations';
import { IFaq } from '../type';

const FaqCard:FunctionComponent<{faq: IFaq}> = ({
    faq: {
        title,
        subheading,
        description,
        buttons
    }
}) => {
    return (
        <motion.details variants={fadeInUp} initial="initial" animate="animate" className="p-6 mt-10 rounded-lg open:bg-radial_matrix_bg open:ring-1 open:invert open:ring-black/5 open:shadow-lg ">
            <summary className="text-xl font-normal leading-tight text-white select-none lg:text-4xl md:text-2xl ">
                {title}
            </summary>
            <div className='max-w-lg pl-3 mt-4 text-sm leading-normal text-white border-l-4 border-solid lg:text-lg md:text-base border-l-red-300'>
                <p>{subheading}</p>
            </div>
            <div className="mt-5 text-base font-semibold leading-relaxed text-white lg:text-xl md:text-lg">
                <p>{description}</p>
            </div>
            <div className='grid max-w-md grid-cols-2 gap-6 mt-10'>
                <button className='py-2 text-xs font-semibold text-black bg-pink-400 shadow-lg md:px-8 md:py-3 md:text-base shadow-pink-400/30 hover:bg-pink-600 hover:text-white'>{buttons[0]}</button>
                {buttons.length > 1 && (<button className='py-2 text-xs font-semibold text-black border-4 border-black shadow-lg md:px-8 md:py-3 md:text-base shadow-black/30 hover:bg-black hover:text-white'>{buttons[1]}</button>)}
            </div>
        </motion.details>
    );
};

export default FaqCard;
