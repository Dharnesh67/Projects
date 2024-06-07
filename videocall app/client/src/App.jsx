import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Router,Switch,Route } from 'react-router-dom' \
import Callpage from './components/Callpage/Callpage'
import Homepage from './components/Homepage/Homepage'
import Nomatch from './components/Nomatch/Nomatch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import global from 'global';
import { Buffer } from 'buffer';
// import Callpage from './components/Callpage';

// Polyfill global and Buffer for browser environment
window.global = window.global || global;
window.Buffer = window.Buffer || Buffer;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/:id' element={<Callpage/>} />
          <Route path='/' element={<Homepage/>} />
          <Route path='*' element={<Nomatch/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
