import { Download } from 'lucide-react';
import React from 'react';
import HeadShot from '../assets/HeadShot.jpg';

const HeroSection = () => {
    return ( 
        <section className = 'relative w-full' data-aos='zoom-in-up' >
            <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
                <div className='h-24 w-2/3 bg-linear-to-br from-[#0c7fac] 
                blur-2xl invisible opacity-40' 
                ></div>
                <div className='h-20 w-3/4 bg-linear-to-r from-[#289eff]
                    opacity-40 blur-2xl' ></div>
            </div>

            <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8
            max-w-5xl lg:max-w-7xl mx-auto relative' >
                <div className='grid md:grid-cols-2 gap-10 xl:gap-14
                relative pt-24 md:max-w-none max-w-2xl
                mx-auto'>
                    <div className='md:py-6'>
                        <div className='text-center md:text-left'>
                            <h1 className= 'pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                                Hi, I'm{'  '}
                                <span className = 'text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-200'>
                                Victor Renteria
                                </span>
                            </h1>
                        </div>
                        <p className = 'text-gray-300 pt-8 text-center md:text-left mx-auto max-w-xl'>
                            I'm a Software Engineering student at UC Irvine. My work spans full-stack development, embedded systems, and applied machine learning.
                            Outside of codeing, you'll probably find me in the gym, playing soccer, or on the mats
                        </p>
                        <div className = 'flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max mx-auto md:mx-0'>
                            <a href='#projects' className='px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center'>
                                <span className= 'absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent'>
                                </span>
                                <span className = 'relative flex items-center justify-center text-white'>
                                    Look at my Work
                                </span>
                            </a>
                            <button className = 'border border-cyan-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center'>
                                <div className = 'hover:scale-105 transition-all ease-in-out flex justify-center items-center relative'>
                                    <div className= 'svg-container'>
                                        <Download size = {18}
                                        className = 'text-primary' />
                                        <div className='download-loader text-white hidden'>
                                        </div>


                                    </div>
                                    <a href="/resume.pdf"
                                    download = "resume.pdf"
                                    className = 'pl-2 text-primary'>
                                    Download Resume
                                    </a>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex w-full md:h-full items-center justify-center relative'>
                            <div className='absolute z-0 w-5/6 right-0 h-[calc(80%+20px)] bg-linear-to-r opacity-25 from-[#0c64ac] to-primary blur-2xl'>
                            </div>
                            <div className='relative z-10 shadow-lg border border-cyan-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden max-w-60 sm:max-w-xs lg:max-w-sm'>
                                <img
                                src={HeadShot}
                                alt= "Hero"
                                width="380"
                                height="auto"
                                loading='lazy'
                                className='w-full h-full object-cover
                                rounded-[30%_70%_70%_30%/30%_30%_70%_70%]'
                                />

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

        
    )
}

export default HeroSection