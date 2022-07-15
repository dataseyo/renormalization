import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Menu from './components/menu/menu';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import About from './pages/about/about';
import Science from './pages/science/science';
import Papers from './pages/papers/papers';

function App() {
  // menu state
  const [open, setOpen] = useState(false)

  return (
    <main className="App">
      <Navbar open={open} setOpen={setOpen}/>
      <Routes className='routes'>
        <Route path='/renormalization' element={<Home open={open} setOpen={setOpen}/>}/>
        <Route path='/renormalization/about' element={<About open={open} setOpen={setOpen}/>}/>
        <Route path='/renormalization/science' element={<Science open={open} setOpen={setOpen}/>}/>
        <Route path='/renormalization/papers' element={<Papers open={open} setOpen={setOpen}/>}/>
      </Routes> 
    </main>
  );
}

export default App;
