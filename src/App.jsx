import { useState } from 'react'
import React from 'react';

import './App.css'
import Header from './component/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import About from './pages/About/About';
import NotFound from './pages/NotFound';
import Footer from './component/Footer/Footer';
import Project from './pages/project/Project';

function App() {


  return (
    <div className='app'>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
