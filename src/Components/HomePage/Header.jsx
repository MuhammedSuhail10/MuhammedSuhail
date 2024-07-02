import React, { useEffect } from 'react';
import '../Fonts/Russo/Russo.css';
import '../Fonts/Outfit/Outfit.css';
import './HomeAnime.css';
import scar from '../Files/scar.png';
const Header = () => {
  useEffect(() => {
    const name = document.getElementById('spanName');
    var colors = ['#e63946','#34A0A4' ]; 
    let currentColorIndex = 0;
    let toggle = false;
    const intervalId = setInterval(() => {
      toggle = !toggle;
      name.style.color = toggle ? colors[currentColorIndex] : colors[(currentColorIndex + 1) % colors.length];
    }, 800);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <header className='flex justify-center flex-col text-[#FEFAE0]' id='head' style={{ alignItems: 'center', height: '80%' }}>
        <img src={scar} alt="" className='absolute md:mr-[35em] mr-[25em] drop-shadow opacity-50 h-[20em]' />
        <h2 className='text-[2em] text-center font-[Russo] '>Yahhō , Myself <span style={{ color: '#34A0A4' }} id='spanName' className='transition duration-[0.5s] ease-in-out delay-150 hover:text-[#e63946] mt-[-1em]'>Muhammed Suhail</span></h2>
        <h1 className='md:text-[3.7em] text-[1.5em] text-center mt-[-0.5em] font-[Outfit]'>Get ready to turn your ideas into reality<span className='animate-pulse  text-[1.2em]'>...</span></h1>
      </header>
    </>
  )
}

export default Header
