import React from 'react'
import Navbar from './../NavBar/Navbar';
import '../Fonts/Jomhuria/Jomhuria.css';
import Footer from './../Footer/Footer';
import './AboutAnime.css';
import resume from '../Files/Resume.pdf'
const AboutPage = () => {
  return (
    <>
      <div className=' bg-[#D9D9D9] text-[#181818] font-[Outfit]'>
        <Navbar />
        <div className='about-anime'>
          <div className='text-center hover:scale-105 font-[Jomhuria] text-[5em] text-[#0F0F0F] mb-[0] lg:mt-[1.5em] mt-[0.5em]'>About</div>
          <div className="text-center hover:scale-105 lg:mt-[-2em] mt-[-3em] lg:text-[1.2em] text-[0.8em] lg:px-[] px-[1em] ">Caffeine, chaos, and a sprinkle of awesome.</div>
          <div className='mt-[3.5em] pb-[1em] md:pl-[4em] xl:pr-[10em] lg:pr-[4em] lg:text-[1.9em] text-[1.1em] px-[1.2em] '>I'm a passionate full-stack developer who builds dynamic web applications that are both user-friendly and efficient. I excel in both frontend and backend, with a focus on clean, maintainable code.</div>
        </div>
      </div>
      <div className='bg-[#0F0F0F] font-[Outfit] text-[#FEFAE0] '>
        <div className='about-anime mt-[1.5em] pb-[1em] md:pl-[4em] xl:pr-[10em] lg:pr-[4em] lg:text-[1.9em] text-[1.1em] px-[1.2em] '>
          <p>Right now, I'm on a mission to conquer the backend, diving deep into microservice architecture to craft super-scalable and modular systems. I'm a lifelong learner, always staying ahead of the curve with the latest trends and best practices. I thrive in collaborative environments and independently, tackling complex challenges with a problem-solving mindset.</p>
        </div>
        <div className="flex scroll-about">
          <a href='https://github.com/MuhammedSuhail10' target="_blank" className="cursor-pointer hover:scale-105 hover:border-[#34A0A4] hover:text-[#34A0A4] md:w-[8em] w-[5em] bg-[#181818] lg:ml-[8em] md:ml-[4em]  ml-[1em] flex flex-col items-center justify-center my-[1em] rounded-[0.5em] md:rounded-[1em] border-[#D9D9D9] border-[1px] md:h-[7em] h-[4em] ">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[35px] md:h-[35px] w-[17px] h-[17px] ' viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65c-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </g>
              </svg>
            </div>
            <div className='mt-[0.5em] md:text-[1em] text-[0.5em] '>
              GitHub
            </div>
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/muhammed-suhail-66b1a4283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="cursor-pointer hover:scale-105 hover:border-[#34A0A4] hover:text-[#34A0A4] md:w-[8em] w-[5em] bg-[#181818]  md:ml-[4em]  ml-[1em] flex flex-col items-center justify-center my-[1em] rounded-[0.5em] md:rounded-[1em] border-[#D9D9D9] border-[1px] md:h-[7em] h-[4em] ">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[35px] md:h-[35px] w-[17px] h-[17px] ' viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </g>
              </svg>
            </div>
            <div className='mt-[0.5em] md:text-[1em] text-[0.5em] '>
              LinkedIn
            </div>
          </a>
          <a href={resume} target="_blank" className="cursor-pointer hover:scale-105 hover:border-[#34A0A4] hover:text-[#34A0A4] md:w-[8em] w-[5em] bg-[#181818]  md:ml-[4em] ml-[1em] flex flex-col items-center justify-center my-[1em] rounded-[0.5em] md:rounded-[1em] border-[#D9D9D9] border-[1px] md:h-[7em] h-[4em] ">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[35px] md:h-[35px] w-[17px] h-[17px] ' viewBox="0 0 48 48">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.35 4.5a2 2 0 0 0-1.95 2v35.1a2 2 0 0 0 1.95 2h27.3a2 2 0 0 0 2-2V6.45a2 2 0 0 0-2-1.95h-2v8.82l-3.86-3.91l-3.88 3.91V4.5Zm5.84 20h16.62M16.19 36.18h12.69m-12.69-5.85h9.74" />
              </svg>
            </div>
            <div className='mt-[0.5em] md:text-[1em] text-[0.5em] '>
              Resume
            </div>
          </a>
        </div>
        <div className='scroll-exp col-span-5 font-[Outfit] text-[#FEFAE0] lg:px-[8em] md:px-[3em] px-[1em] '>
          <h1 className='pt-[1em] font-[Russo] lg:text-[3em] md:text-[2em] text-[1.2em] '>Experiance</h1>
          <p className='md:text-[1.2em] text-[0.8em] md:mt-[-1em] mt-[-0.4em] opacity-75'>A story still unfolding <span className='animate-pulse md:text-[1.5em]'>...</span></p>
        </div>
      </div>
      <section className='comp  text-[#FEFAE0] mb-[5em] lg:mx-[8em] md:mx-[2.5em] mx-[1em]'>
        <div className='scroll-anim overflow-hidden whitespace-nowrap mt-[2.5em] hover:bg-[#141414] hover:pt-[0.2em] hover:lg:px-[1.5em] hover:md:px-[1em] hover:px-[0.5em] hover:rounded-md transition-all duration-100 '>
          <div className='flex justify-between  cursor-default '>
            <h1 className=' font-[Russo] lg:text-[3em] md:text-[2em] text-[1.2em] '>Python Developer</h1>
            <h1 className='font-[Outfit] lg:pt-[1em] md:pt-[0.8em] pt-[1em] md:text-[1.1em] text-[0.5em] '>January 2024 - Present</h1>
          </div>
          <div className="flex cursor-default">
            <div className="scroll-comp">
              <h1 className='line-comp font-[Outfit] md:text-[1.8em] text-[1em] text-[#34A0A4] '>Emergio Games</h1>
            </div>
            <div className="scroll-comp">
              <h1 className='line-comp hidden font-[Outfit] md:text-[1.8em] text-[1em] text-[#34A0A4] '>Emergio Games</h1>
            </div>
            <div className="scroll-comp">
              <h1 className='line-comp hidden font-[Outfit] md:text-[1.8em] text-[1em] text-[#34A0A4] '>Emergio Games</h1>
            </div>
            <div className="scroll-comp">
              <h1 className='line-comp hidden font-[Outfit] md:text-[1.8em] text-[1em] text-[#34A0A4] '>Emergio Games</h1>
            </div>
            <div className="scroll-comp">
              <h1 className='line-comp hidden font-[Outfit] md:text-[1.8em] text-[1em] text-[#34A0A4] '>Emergio Games</h1>
            </div>
            <div className="scroll-comp">
              <h1 className='line-comp hidden font-[Outfit] md:text-[1.8em] text-[1em] text-[#34A0A4] '>Emergio Games</h1>
            </div>
            <div className="scroll-comp">
              <h1 className='line-comp hidden font-[Outfit] md:text-[1.8em] text-[1em] text-[#34A0A4] '>Emergio Games</h1>
            </div>
          </div>
        </div>
        <hr className='opacity-25 mt-[1em]' />
      </section>
      <Footer />
    </>
  )
}

export default AboutPage
