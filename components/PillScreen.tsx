import React, { FunctionComponent } from 'react';
import { screen } from '../type';
import Image from 'next/image';
import redPill from '../public/assets/images/red-pill.png';
import bluePill from '../public/assets/images/blue-pill.png';

const PillScreen: FunctionComponent<{ screen: screen, setScreen: Function }> = ({ screen, setScreen }) => {
    return (
        <div className='relative grid justify-center w-full h-full min-h-[30vh] grid-cols-2 gap-24 bg-white place-content-center'>
            <h3 className='absolute left-0 right-0 ml-auto mr-auto text-2xl leading-tight text-black w-fit lg:top-1/4 md:top-1/4 top-1/2 lg:text-6xl md:text-4xl '>SO RABBIT HOLE OR WONDERLAND?</h3>
            <div className='col-span-1 cursor-pointer lg:justify-self-end md:justify-self-end justify-items-start drop-shadow-2xl' onClick={() => setScreen('rabbit hole')}>
                <Image 
                    src={redPill}
                    alt='red pill'
                    height="150px"
                    width="50px"
                    layout="intrinsic"
                />
            </div>
            <div className='col-span-1 cursor-pointer lg:justify-self-start md:justify-self-start justify-self-end drop-shadow-2xl' onClick={() => setScreen('wonderland')}>
                <Image 
                    src={bluePill}
                    alt='blue pill'
                    height="150"
                    width="50px"
                    layout="intrinsic"
                />
            </div>
        </div>
    );
};

export default PillScreen;
