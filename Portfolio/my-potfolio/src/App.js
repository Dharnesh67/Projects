import './App.css';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
// import Projects from './containers/projects';
import Contact from './containers/contact';

import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    {/* Particles */}
    {/* Navbar */}
    {/* Main page content */}
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
