import React, { useRef } from 'react'
import Navbar from '../NavBar/Navbar'
import { Box, Button, Grid, IconButton, Snackbar } from '@mui/material'
import scar from '../Files/scar.png';
import { Link } from 'react-router-dom';
import Footer from './../Footer/Footer';
import emailjs from '@emailjs/browser';
import CloseIcon from '@mui/icons-material/Close';

const ContactPage = () => {
  const [open, setOpen] = React.useState(false);
  const [success, setSucc] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      ><CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_tt1uxbr", "template_y7s350j", form.current, {
        publicKey: '-vNcTYN9f1Z_roiiz',
      })
      .then(
        () => {
          form.current.reset();
          setSucc(true)
          setOpen(true)
        },
        (error) => {
          form.current.reset();
          setOpen(true)
        },
      );
    if (success) {
      setMessage('Your message has been successfully delivered')
    } else {
      setMessage('Your message has been successfully delivered')
    }
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
      <div className='bg-[#181818] text-[#FEFAE0] font-[Outfit]'>
        <Navbar />
        <div className='about-anime'>
          <div className='text-center hover:scale-105 font-[Jomhuria] text-[5em] mb-[0] lg:mt-[1.5em] mt-[0.5em] '>Contact</div>
          <div className="text-center lg:mt-[-2em] mt-[-3em] md:mb-[8em] lg:text-[1.2em] text-[0.8em] lg:px-[] px-[1em] ">Let's craft something magical</div>
          <div className='mt-[3.5em] pb-[1em] md:pl-[4em] lg:pr-[10em] lg:text-[1.9em] text-[1.1em] px-[1.2em] '></div>
        </div>
      </div>
      <div className='bg-[#181818] text-[#FEFAE0]'>
        <Box sx={{ flexGrow: 1, width: '100%' }} className='xl:pt-[1em] xl:pr-[10em] xl:pb-[5em] xl:pl-[16em] lg:px-[5em] px-[1em]'>
          <Grid container >
            <Grid item sm={12} md={8}>
              <div className='relative flex flex-col md:w-[90%] '>
                <img src={scar} alt="" className='absolute pr-[3em] md:mt-[-4em] md:hidden mt-[-20em] drop-shadow opacity-25 h-[12em]' />
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name='from_name' id='name' placeholder='Name *' required className='w-[100%] md:w-[100%] font-[Outfit] capitalize border-0 text-[#34A0A4] placeholder:text-[#34A0A4] border-[#34A0A4] bg-transparent py-[0.4em] md:border-b-[1.5px] border-b-[1px] focus:outline-none focus:placeholder:text-[#575757] md:placeholder:text-[28pt] placeholder:text-[20pt] md:text-[28pt] text-[20pt] ' />
                  <input type="email" name='email_id' id='email' placeholder='Email *' required className='w-[100%] md:w-[100%] font-[Outfit] capitalize border-0 text-[#34A0A4] placeholder:text-[#34A0A4] border-[#34A0A4] md:mt-[2em] mt-[0.5em] bg-transparent py-[0.4em] border-b-[1.5px]  focus:outline-none focus:placeholder:text-[#575757]  md:placeholder:text-[28pt] placeholder:text-[20pt] md:text-[28pt] text-[20pt] ' />
                  <input type="text" name='place' id='place' placeholder='Location *' required className='w-[100%] md:w-[100%] font-[Outfit] capitalize border-0 text-[#34A0A4] placeholder:text-[#34A0A4] border-[#34A0A4] md:mt-[2em] mt-[0.5em] bg-transparent py-[0.4em] border-b-[1.5px]  focus:outline-none focus:placeholder:text-[#575757] md:placeholder:text-[28pt] placeholder:text-[20pt] md:text-[28pt] text-[20pt] ' />
                  <textarea name="message" id="message" placeholder='Message *' required className='w-[100%] md:w-[100%] font-[Outfit] capitalize border-0 text-[#34A0A4] placeholder:text-[#34A0A4] border-[#34A0A4] md:mt-[2em] mt-[0.5em] bg-transparent py-[0.4em] border-b-[1.5px]  focus:outline-none focus:placeholder:text-[#575757]  md:placeholder:text-[28pt] placeholder:text-[20pt] md:text-[28pt] text-[20pt] '></textarea>
                  <div className='scroll-fade grid grid-cols-1 place-items-end '>
                    <button className='bg-[#34A0A4] cursor-default text-[#FEFAE0] rounded-full lg:mr-[6em] md:mt-[5em] mt-[3em] mr-[3em] md:mb-[2em] mb-[3em] w-[6em] h-[6em] md:w-[10em] md:h-[10em] hover:bg-[#575757] transition-all duration-[0.3s] hover:text-[#D9D9D9] hover:font-[900] ease-in-out delay-80 hover:scale-105'>
                      <div className='hover:animate-spin md:py-[2.7em] py-[3em] text-center md:text-[1.5em] text-[0.8em] font-[Outfit]'>Send</div>
                    </button>
                  </div>
                </form>
              </div>
            </Grid>
            <Grid item md={4} sm={12} className='hidden md:block '>
              <img src={scar} alt="" className='absolute pr-[3em] md:mt-[-4em] mt-[-20em] drop-shadow opacity-25 h-[12em]' />
              <div className=' relative mt-[5em]  ' >
                <h5 className=' uppercase text-[#e9ecef] opacity-55 font-serif text-[10pt] tracking-widest '>Contact Details</h5>
                <div className='pt-[1em] text-[15pt] font-mono opacity-80 tracking-wide'>
                  <h3>Ernakulam,Kerala</h3>
                  <a href='mailto:muhammedsuhusuhail@gmail.com' >muhammedsuhusuhail@gmail.com</a>
                </div>
              </div>
              <div className=' relative mt-[4em] hidden md:block ' >
                <h5 className=' uppercase text-[#e9ecef] opacity-55 font-serif text-[10pt] tracking-widest '>Social</h5>
                <div className='flex flex-col pt-[1em] text-[15pt] font-mono opacity-80 tracking-wide'>
                  <Link to='' >Instagram</Link>
                  <Link to='' >Telegram</Link>
                  <Link to='' >LinkedIn</Link>
                  <Link to='' >GitHub</Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </div>
    </>
  )
}

export default ContactPage