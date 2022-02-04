import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { fadeInUp, viewPort } from '../animations';
import { screen } from '../type';
import PillScreen from './PillScreen';
import RabbitHole from './RabbitHole';
import Wonderland from './Wonderland';

const Careers = () => {
    const [screen, setScreen] = useState<screen>('pill screen');

    return (
        <motion.div variants={fadeInUp} whileInView="animate" initial="initial" className='lg:mx-6 mx-0 box-border mt-20 md:h-[72vh] bg-white'>
            {
                screen === 'pill screen' ? (
                    <PillScreen setScreen={setScreen} />
                ) : (
                    screen === 'rabbit hole' ? (
                        <RabbitHole setScreen={setScreen} />
                    ) : (
                        <Wonderland setScreen={setScreen} />
                    )
                )
            }
        </motion.div>
    );
};

export default Careers;
