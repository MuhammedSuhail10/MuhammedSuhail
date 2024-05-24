import React from 'react'
import Navbar from './../NavBar/Navbar';

const WorkPage = ({data}) => {
  return (
    <>
      <div className='bg-[#181818] text-[#FEFAE0] font-[Outfit]'>
        <Navbar />
        <div className='about-anime'>
          <div className='text-center hover:scale-102 font-[Jomhuria] text-[5em] mb-[0] lg:mt-[1.5em] mt-[0.5em]'>Works</div>
          <div className="text-center lg:mt-[-2em] mt-[-3em] md:mb-[8em] lg:text-[1.2em] text-[0.8em] lg:px-[] px-[1em] ">Creating next level digital products</div>
          <div className='mt-[3.5em] pb-[1em] md:pl-[4em] lg:pr-[10em] lg:text-[1.9em] text-[1.1em] px-[1.2em] '></div>
        </div>
      </div>
      <div className='about-anime md:mt-[-5em] mt-[-4em] lg:px-[7em] px-[1em] text-[#FEFAE0]'>
        {data.map((i) =>
          <>
            <div key={i.id} className='scroll-anim mb-[1.5em] px-[0.5em] md:px-[] whitespace-nowrap mt-[2.5em] hover:bg-[#1f1f1f] hover:text-[#34A0A4] hover:pt-[0.2em] hover:lg:px-[2em] hover:md:px-[1em] hover:px-[0.5em] hover:rounded-lg transition-all duration-100 '>
              <div className='flex justify-between cursor-pointer hover:py-[0.5em] '>
                <h1 className=' font-[Russo] tracking-wider lg:text-[2.8em] md:text-[2em]  text-[1.2em] font-[1000] '>{i.name}</h1>
                <h1 className='font-[Outfit] lg:pt-[1.2em] md:pt-[0.8em] pt-[1em] md:text-[1.1em] text-[0.5em] '>{i.category}</h1>
              </div>
            </div>
            <hr className='mt-[-0.5em] opacity-25' />
          </>
        )}
      </div>
    </>
  )
}

export default WorkPage