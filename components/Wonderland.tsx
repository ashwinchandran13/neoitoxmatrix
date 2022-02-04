import React, { FunctionComponent } from 'react';

const Wonderland:FunctionComponent<{setScreen: Function}> = ({setScreen}) => {
  return (
      <div className='flex justify-center w-full lg:h-full md:h-full min-h-[30vh] bg-white place-items-center'>
        <h3 className='text-2xl leading-tight text-black lg:text-6xl md:text-4xl '>Hey Alice, want out?</h3>
        <button className='p-2 ml-2 text-2xl text-black duration-500 delay-100 md:text-4xl lg:text-6xl font-matrixCode bg-matrix_green_btn shadow-matrix_green_btn hover:drop-shadow-2xl hover:scale-110' onClick={() => setScreen('pill screen')}>01</button>
      </div>
  );
};

export default Wonderland;
