import React from 'react'
import Home from "./Components/Home";
import About from "./Components/About"
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';

export default function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <Footer/>
    </div>
  )
}
