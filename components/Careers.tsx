import React, { useState } from 'react';
import { screen } from '../type';
import PillScreen from './PillScreen';
import RabbitHole from './RabbitHole';
import Wonderland from './Wonderland';

const Careers = () => {
    const [screen, setScreen] = useState<screen>('pill screen');

    return (
        <div className='lg:h-[78vh] md:h-[50vh] lg:mx-6 mx-0 box-border mt-20'>
            {
                screen === 'pill screen' ? (<PillScreen screen={screen} setScreen={setScreen} />) : (screen === 'rabbit hole' ? (<RabbitHole setScreen={setScreen} />) : (<Wonderland setScreen={setScreen} />))
            }
            {/* <RabbitHole setScreen={setScreen} /> */}
        </div>
    );
};

export default Careers;
