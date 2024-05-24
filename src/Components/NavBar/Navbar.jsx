import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, List, ListItem } from '@mui/material';
import '../Fonts/Outfit/Outfit.css';
import { Link } from "react-router-dom";
import './NavAnime.css';
const Navbar = ({ style }) => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box className='w-[20em] h-[100%]  bg-[#0F0F0F]' role="presentation" onClick={toggleDrawer(false)}>
            <List sx={{ display: 'flex', justifyContent: 'center', height: '100%', flexDirection: 'column', marginInline: '3em' }} >
                <ListItem disablePadding>  
                    <Link to='/about' className='nav-anim text-[#FEFAE0] font-[Outfit] text-[30pt] hover:text-[#34A0A4] hover:scale-102 hover:mx-[0.2em] hover:font-[1000]'>About </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='/work' className='nav-anim text-[#FEFAE0] font-[Outfit] text-[30pt] hover:text-[#34A0A4] hover:scale-102 hover:mx-[0.2em] hover:font-[1000]'>Work </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='/contact' className='nav-anim text-[#FEFAE0] font-[Outfit] text-[30pt] hover:text-[#34A0A4] hover:scale-102 hover:mx-[0.2em] hover:font-[1000]'>Contact </Link>
                </ListItem>
            </List>
        </Box>
    );
    return (
        <>
            <div style={style} className='nav-anim top-0 md:p-[1.5em] hidden lg:flex font-[Outfit] text-[15pt] font-bold justify-between h-20'>
                <Link to='/' className='flex hover:text-[#34A0A4] hover:scale-110 pl-[5em]'>
                    Muhammed Suhail<svg className='m-[0.2em]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M92.043 24.678c-2.944.002-5.89.177-8.828.535C36.212 30.937 9.05 81.023 22.537 137.08a131.663 131.663 0 0 0 15.57 37.668c-.006-.09-.007-.177-.013-.266a38.477 38.477 0 0 0 4.85 6.438c11.252 12.063 27.762 13.945 36.796 4.672c9.034-9.273 7.16-26.484-4.09-38.547c-1.41 7.565-7.797 13.434-15.77 13.434c-8.998 0-16.35-7.356-16.35-16.355c0-1.885.26-3.35.824-4.92C54 117.51 73.796 100.763 98.912 96.082c30.028-5.596 59.188 7.624 75.38 31.316c4.616 13.202 6.077 24.766 5.616 35.514c-.84 19.612-8.37 37.303-17.142 57.244c-12.184 27.692-26.016 59.814-22.526 104.215c1.285 57.826 31.464 113.704 84.887 145.392c82.36 48.853 188.73 21.7 237.592-60.64c48.86-82.338 21.713-188.687-60.648-237.54a173.597 173.597 0 0 0-40.795-17.617c45.042 34.597 60.388 96.118 36.68 147.875a103.585 103.585 0 0 0-2.44-12.897c-13.92-54.505-68.97-88.07-123.476-74.158c-8.882 2.263-16.897 6.52-24.515 10.807c35.86-5.066 70.14 16.573 79.31 52.47c9.83 38.507-13.138 77.213-51.657 87.04a72.644 72.644 0 0 1-29.563 1.326a122.992 122.992 0 0 1-21.586-10.123c-14.722-8.732-26.925-20.077-36.413-33.076c-16.793-32.11-20.372-62.952-8.217-94.378l-.035-.014l.508-1.154c8.797-19.996 17.684-40.13 18.707-63.97c.397-9.248-.45-18.94-2.855-29.228c-.53-5.94-1.51-12-2.987-18.136c-12.644-52.555-56.53-91.7-100.695-91.672zm282.39 57.53c-28.528-.353-54.46 19.41-67.154 61.7c30.764-33.286 128.965-6.368 182.1 96.524C476.72 139.258 421.974 82.794 374.43 82.207z" />
                    </svg>
                </Link>
                <div>
                    <ul className='flex justify-evenly pr-[5em]'>
                        <Link to='/work' className='hover:text-[#34A0A4] hover:scale-110 px-[1em]'>Work</Link>
                        <Link to="/about" className='hover:text-[#34A0A4]  hover:scale-110 px-[1em]'>About</Link>
                        <Link to='/contact' className='hover:text-[#34A0A4] hover:scale-110 px-[1em]'>Contact</Link>
                    </ul>
                </div>
            </div >
            <div style={style} className='top-0 p-[1.5em] lg:hidden flex font-[Outfit] text-[12pt] font-bold justify-between opacity-85 h-20'>
                <div className=' hover:text-[#34A0A4] hover:scale-105'>
                    Muhammed Suhail
                </div>
                <div>
                    <button onClick={toggleDrawer(true)}><MenuIcon className='hover:fill-[#34A0A4] hover:scale-105' /></button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </div>
            </div >
        </>
    )
}

export default Navbar