import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Router,Switch,Route } from 'react-router-dom' \
import Callpage from './components/Callpage/Callpage'
import Homepage from './components/Homepage/Homepage'
import Nomatch from './components/Nomatch/Nomatch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
