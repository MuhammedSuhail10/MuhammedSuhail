import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage/HomeAnime.css';
const Footer = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    return (
        <div className='lg:px-[10em] px-[3em] pb-[1em] lg:py-[2em] flex justify-between font-[Outfit] text-[#FEFAE0]  lg:text-[0.9em] text-[0.5em] font-extrabold lg:tracking-[0.2em] lg:opacity-60 opacity-40'>
            <div className='hover:text-[#e63946]'>MuhammedSuhail<span className='text-[#34A0A4]'>@{currentYear}</span></div>
            <div className='flex'>
                <Link to='https://github.com/MuhammedSuhail10' className='px-[1em] hover:text-[#34A0A4]'>GitHub</Link>
                <Link to='https://www.instagram.com/suh.41.l/?igshid=NGVhN2U2NjQ0Yg%3D%3D' className='px-[1em] hover:text-[#34A0A4]'>Instagram</Link>
                <div className='px-[1em] hover:text-[#34A0A4]'>Source</div>
            </div>
        </div>
    )
}

export default Footer
