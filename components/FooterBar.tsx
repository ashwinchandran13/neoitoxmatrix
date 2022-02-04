import { motion } from 'framer-motion';
import React from 'react';
import { slideInUp } from '../animations';
import { headers } from '../constants/data';

const FooterBar = () => {
    const heroScroll = () => {
        return location.href = '#navbar'
    }
    return (
        <motion.div variants={slideInUp} whileInView="animate" initial="initial" exit="exit" className='w-full px-4 py-6 mt-10 md:h-1/2 md:mt-20 bg-matrix_green_header md:px-64 md:py-10'>
            <div className="grid grid-cols-2 place-content-center">
                <div className='flex col-span-1 justify-self-start'>
                    <div className='duration-500 cursor-pointer hover:shadow-lg hover:shadow-black/30 hover:-translate-y-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill='white' /></svg>
                    </div>
                    <div className='ml-3 duration-500 cursor-pointer hover:shadow-lg hover:shadow-black/30 hover:-translate-y-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" fill="white" /></svg>
                    </div>
                    <div className='ml-3 duration-500 cursor-pointer hover:shadow-lg hover:shadow-black/30 hover:-translate-y-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="white" /></svg>
                    </div>
                    <div className='ml-3 duration-500 cursor-pointer hover:shadow-lg hover:shadow-black/30 hover:-translate-y-1'>
                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" fill="white" /></svg>
                    </div>
                </div>
                <div className='col-span-1 justify-self-end'>
                    <button className='flex p-2 pr-4 hover:bg-matrix_green_btn hover:shadow-lg hover:shadow-black/30' onClick={() => heroScroll()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        <h5 className='text-lg font-semibold'>Back to top</h5>
                    </button>
                </div>
            </div>
            <div className="grid grid-flow-col grid-rows-2 gap-2 mt-10 md:grid-cols-3 md:grid-rows-none md:grid-flow-row place-content-evenly">
                <div className='flex flex-col order-1'>
                    <h5 className='text-lg tracking-wider select-none text-slate-300'>NEOITO</h5>
                    {headers.map((header) => (
                        <a href='' key={header.name} className='mt-4 text-base text-white hover:text-matrix_green_btn'>{header.name}</a>
                    ))}
                </div>
                <div className="flex flex-col order-3 md:order-2">
                    <h5 className='text-lg tracking-wider select-none text-slate-300'>DOMAINS</h5>
                    <a href="" className='mt-4 text-base text-white hover:text-matrix_green_btn'>AR/VR</a>
                    <a href="" className='mt-4 text-base text-white hover:text-matrix_green_btn'>AI/ML</a>
                    <a href="" className='mt-4 text-base text-white hover:text-matrix_green_btn'>IOT</a>
                    <a href="" className='mt-4 text-base text-white hover:text-matrix_green_btn'>Computer Graphics</a>
                    <a href="" className='mt-4 text-base text-white hover:text-matrix_green_btn'>System Programming</a>
                    <a href="" className='mt-4 text-base text-white hover:text-matrix_green_btn'>Security</a>
                </div>
                <div className="flex flex-col order-2 mt-4 md:order-3 md:mt-0">
                    <h5 className='text-lg tracking-wider select-none text-slate-300'>CONTACT US</h5>
                    <a href="" className='mt-4 text-base text-white hover:text-matrix_green_btn'>mrsmith@neoito.com</a>
                    <ul className='w-40 mt-4 text-base leading-relaxed text-white break-normal hover:text-matrix_green_btn'>
                        <li>Pattom</li>
                        <li>Trivandrum</li>
                        <li>India 695 004</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row-reverse py-4'>
                <h5 className='text-xs text-white md:base'>Theme Created by&nbsp;
                <a href="https://ashwin-chandran-portfolio.vercel.app" className='hover:text-matrix_green_btn'>Ashwin Chandran</a>&nbsp;for Neoito
                </h5>
            </div>
            <div className='flex items-center justify-center pt-4 space-x-4 border-t-2 border-white/20'>
                <svg width="113" height="28" viewBox="0 0 113 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.6691 3.58996V23.7857H63.8809L63.8812 22.1738C65.5142 19.756 66.4678 16.8413 66.4678 13.704C66.4678 10.5666 65.5142 7.65203 63.8812 5.23416L63.8809 3.58996H69.6691ZM40.0529 3.57349C38.9535 4.79538 38.05 6.1971 37.392 7.72916L29.9922 7.72935V11.1735L36.3787 11.1733C36.2404 11.9963 36.1684 12.8417 36.1684 13.704C36.1684 14.115 36.1847 14.5221 36.2169 14.9248H29.9922V19.7271L37.413 19.7274C38.0575 21.2135 38.9332 22.5761 39.9949 23.7697L24.2686 23.7694V3.57379L40.0529 3.57349ZM102.911 3.58996C108.483 3.58996 113 8.10729 113 13.6797C113 19.2522 108.483 23.7694 102.911 23.7694C97.3391 23.7694 92.8221 19.2522 92.8221 13.6797C92.8221 8.10729 97.3391 3.58996 102.911 3.58996ZM7.00086 3.57379L15.3599 15.2401V3.57379H20.8247V23.7694H14.996L5.47296 10.0739V23.7694H0V3.57379H7.00086ZM102.919 8.10101C99.834 8.10101 97.333 10.6022 97.333 13.6877C97.333 16.7731 99.834 19.2744 102.919 19.2744C106.004 19.2744 108.505 16.7731 108.505 13.6877C108.505 10.6022 106.004 8.10101 102.919 8.10101ZM93.2585 3.58996V7.72935H73.1937V3.58996H93.2585Z" fill="white" />
                    <path d="M86.1285 7.63208H80.3402V23.7694H86.1285V7.63208Z" fill="white" />
                    <path d="M54.4393 6.13L56.0741 2.21596C60.7259 4.08328 64.0105 8.63571 64.0105 13.9554C64.0105 20.939 58.3498 26.6002 51.3669 26.6002C49.9392 26.6002 48.5668 26.3636 47.2868 25.9273L50.2438 22.2999C50.6142 22.3497 50.9924 22.3755 51.3766 22.3755C56.0211 22.3755 59.7862 18.6101 59.7862 13.9652C59.7862 10.401 57.5693 7.35463 54.4393 6.13ZM51.7079 5.56124C51.5979 5.55698 51.4876 5.55483 51.3766 5.55483C46.7322 5.55483 42.9671 9.32027 42.9671 13.9652C42.9671 17.475 45.117 20.4828 48.1716 21.7432L46.2489 25.5215C41.8158 23.5566 38.7232 19.1172 38.7232 13.9554C38.7232 6.97183 44.384 1.31055 51.3669 1.31055C52.5495 1.31055 53.6943 1.47293 54.78 1.77662L51.7079 5.56124Z" fill="white" />
                    <path d="M45.9469 13.3638L56.6429 0L51.5648 12.0419L57.1977 13.3638L45.705 27.2919L52.2068 14.6818L45.9469 13.3638Z" fill="white" />
                </svg>
                <h5 className='text-2xl text-white font-matrixCode'>X</h5>
                <h5 className='text-3xl text-white font-matrixFont'>THE MATRIX</h5>
            </div>
        </motion.div>
    );
};

export default FooterBar;
