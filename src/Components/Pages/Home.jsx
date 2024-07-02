import React, { useEffect, useState } from 'react';
import Navbar from './../NavBar/Navbar';
import Header from '../HomePage/Header';
import Section from './../HomePage/Section';
import Loader from './../Loader/Loader';
import '../HomePage/HomeAnime.css';

const Home = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (counter <= 104) {
                setCounter((prevCounter) => prevCounter + 5);
                if (counter === 100) {
                    document.getElementById('load').style.display = "none";
                    document.getElementById('home').style.display = "block";
                }
            }
        }, 15);
        return () => clearInterval(interval);
    }, [counter]);
    return (
        <>
            <div id="load" className='block'>
                <Loader counter={counter} />
            </div>
            <div id='home' className="hidden">
                <div className='h-dvh md:px-[2em] px-[1em] pt-[3em]'>
                    <div className='border-[1px] border-[#34A0A4] rounded-[1em] h-[94%]'>
                        <Navbar style={{ color: "#FEFAE0" }} />
                        <Header />
                    </div>
                </div>
                <Section />
            </div>
        </>
    )
}

export default Home