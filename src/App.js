import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss';

import Nav from './components/Nav'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Error from './components/Pages/Error'

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path="*" element={<Error/>} />
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
