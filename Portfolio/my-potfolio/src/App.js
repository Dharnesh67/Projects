import './App.css';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
// import Projects from './containers/projects';
import Contact from './containers/contact';
import ParticlesComponent from './components/particles';
import Particles from '@tsparticles/react';
import { useEffect } from 'react';
import {loadfull} from 'tsparticles';

import {Routes,Route,useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
    {/* Particles */}
    {/* Navbar */}
    {/* Main page content */}
   {location.pathname==="/" && <ParticlesComponent  id="particles-1" />}
    <Navbar/>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route path="/Resume" element={<Resume/>}/>
      <Route path="/skills" element={<Skills/>}/>
      {/* <Route path="/projects" element={<Projects/>}/> */}
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
