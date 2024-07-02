import React, { useEffect } from 'react';
import Home from './Home';
import AboutPage from '../About/AboutPage';
import { Routes, Route } from "react-router-dom";
import ContactPage from './../Contact/ContactPage';
import Work from './Work';
const MainRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </>
  )
}

export default MainRouter