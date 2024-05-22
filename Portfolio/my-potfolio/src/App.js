import "./App.css";
import Home from "./containers/home";
import About from "./containers/about";
import Education from "./containers/Education";
import Skills from "./containers/skills";
import { FaBars, FaReact } from 'react-icons/fa';
// import Projects from './containers/projects';
import Contact from "./containers/contact";
import ParticlesComponent from "./components/particles";
import Particles from "@tsparticles/react";
import { useEffect } from "react";
import { loadfull } from "tsparticles";
import PG from "./components/pageheader/pgheader";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        {/* Particles */}
        {/* Navbar */}
        {/* Main page content */}
        <div className="hello">
        {/* {location.pathname === "/" && <ParticlesComponent id="particles-1" />} */}
        {<ParticlesComponent id="particles-1" />}
        </div>
        <Navbar />
      { location.pathname !== "/" &&  <PG title={location.pathname} logo={FaReact}/>}
        <div className="main-content">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Education_experience" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
