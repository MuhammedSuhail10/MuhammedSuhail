import React from 'react';
import './HomePage.css';
import Footer from './../Footer/Footer';
import { Link } from 'react-router-dom';
import './HomeAnime.css';
const Section = () => {
    return (
        <>
            <section className='bg-[#D9D9D9] w-100'>
                <div className='lg:grid md:grid-cols-6 md:grid-rows-3 w-100 lg:h-[30em] md:pt-[5em]'>
                    <div className='md:col-span-4 md:row-span-1 lg:pt-[-1em] font-[Outfit] pt-[1em] text-[#0F0F0F] lg:px-[6em] px-[1.2em] md:text-[2em] text-[1.2em]'>
                        <p className='scroll-anim'>Empowering Brands in the Digital Era. <br /> My Tools? <span className='animate-pulse'> <strong>React & Django.</strong></span> My Passion? <br />Witnessing Your Success.</p>
                    </div>
                    <Link to='about' className='col-span-2 hidden lg:block row-span-2 mt-[2.5em] lg:mr-[15em] mr-[5em]'>
                        <div className=" bg-[#0F0F0F] scroll-anim-text hover:bg-[#34A0A4] hover:text-[#D9D9D9] transition-all text-[#34A0A4]  hover:font-[900] rounded-full ease-in-out delay-80 hover:scale-105 duration-[0.3s]  mt-[6em] w-[8em] h-[8em] md:w-[15em] md:h-[15em]">
                            <div className='hover:animate-spin md:py-[4.3em] py-[3.2em] text-center md:text-[1.5em] font-[Outfit]'>About Me</div>
                        </div>
                    </Link>
                    <div className='col-span-5 scroll-anim-text font-[Outfit] text-[#0F0F0F] lg:px-[6em] px-[1.2em] md:text-[2em] text-[1.2em]'>
                        Here's how, I can help you <span className='animate-pulse md:text-[1.5em]'>...</span>
                    </div>
                </div>
            </section>
            <section className='text-[#FEFAE0] mb-[5em] lg:mx-[12em] md:mx-[2.5em] mx-[1em]'>
                <div className='scroll-anim pt-[0.2em]'>
                    <h1 className=' pt-[1em] font-[Russo] lg:text-[3em] text-[2em]'>Web Development</h1>
                    <h1 className='font-[Outfit] md:text-[1.2em] text-[1em] text-[#34A0A4] '>Crafting beautiful experiences, pixel by pixel.</h1>
                    <hr className='opacity-25 mt-[1em]' />
                </div>
                <div className='scroll-anim pt-[0.2em]'>
                    <h1 className='pt-[1em] font-[Russo] lg:text-[3em] text-[2em]'>Backend Development</h1>
                    <h1 className='font-[Outfit] md:text-[1.2em] text-[1em] text-[#34A0A4] '>Building the engine that drives your digital experiences.</h1>
                    <hr className='opacity-25 mt-[1em]' />
                </div>
                <div className='scroll-anim pt-[0.2em]'>
                    <h1 className='pt-[1em] font-[Russo] lg:text-[3em] text-[2em]'>Frontend Development</h1>
                    <h1 className='font-[Outfit] md:text-[1.2em] text-[1em] text-[#34A0A4] '>I bridge the gap between design and interactivity.</h1>
                    <hr className='opacity-25 mt-[1em]' />
                </div>
            </section>
            <section className=' text-[#FEFAE0] md:mt-[1em] mt-[-2em] mb-[1em] md:mb-[3em] font-[Outfit] scroll-sec'>
                <div className="scroll">
                    <div className="scroll-line">
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Django</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">ReactJs</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Python</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Rest Framework</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">JavaScript</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Tailwind</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Bootstrap</div>
                    </div>
                    <div className="scroll-line">
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Django</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">ReactJs</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Python</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Rest Framework</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">JavaScript</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Tailwind</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Bootstrap</div>
                    </div>
                </div>
                <div className="scroll mt-[1em]">
                    <div className="scroll-line-rev">
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Rest Framework</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Python</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Django</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">ReactJs</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Bootstrap</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">JavaScript</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Tailwind</div>
                    </div>
                    <div className="scroll-line-rev">
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Rest Framework</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Python</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Django</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">ReactJs</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Bootstrap</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">JavaScript</div>
                        <div className="line md:py-[0.3em] md:px-[2em] py-[0.3em] px-[1em] md:text-[1.5em] text-[0.8em]">Tailwind</div>
                    </div>
                </div>
            </section>
            <section className='bg-[#181818] mt-[1em] text-[#FEFAE0]'>
                <div className='scroll-anim lg:px-[3.5em] px-[2em] lg:pt-[3.5em] pt-[2em]  lg:text-[3.5em] text-[1em] font-serif tracking-[0.38em]'>
                    Lets Work <br /><span className='animate-pulse md:text-[1em]'>Together...</span>
                    <hr className='opacity-10 z-50 mt-[1em]' />
                </div>
                <div className='scroll-fade grid grid-cols-1 place-items-end'>
                    <Link to='contact' className='bg-[#34A0A4] text-[#FEFAE0] rounded-full lg:mr-[15em] md:mt-[-7.7em] mt-[-3em] mr-[3em] mb-[2em] w-[6em] h-[6em] md:w-[15em] md:h-[15em] hover:bg-[#e63946] transition-all duration-[0.3s] hover:text-[#D9D9D9] hover:font-[900] ease-in-out delay-80 hover:scale-105'>
                        <div className='hover:animate-spin md:py-[4.3em] py-[3em] text-center md:text-[1.5em] text-[0.8em] font-[Outfit]'>Lets Connect</div>
                    </Link>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Section