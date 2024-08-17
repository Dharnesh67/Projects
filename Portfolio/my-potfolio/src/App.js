import "./App.css";
import Home from "./containers/home";
import About from "./containers/about";
import Education from "./containers/Education";
import Skills from "./containers/skills";
import {  FaReact } from 'react-icons/fa';
import Contact from "./containers/contact";
import ParticlesComponent from "./components/particles";
import PG from "./components/pageheader/pgheader";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <div className="hello">
        {<ParticlesComponent id="particles-2" />}
        </div>
        <Navbar />
      { location.pathname !== "/" &&  <PG title={location.pathname} logo={FaReact}/>}
        <div className="main-content">
          <Routes> 
            {/*  we have created routes here*/}
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
