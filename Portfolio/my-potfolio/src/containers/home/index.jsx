import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home_text">
                    <h1 className="typing">
                        <span className="wave-emoji">👋</span> Hey, I'm <span className="highlight">Dharmesh Raikwar</span>
                    </h1>
                    <br />
                    <h3 className="sub-heading typing">Aspiring Innovator @ NIT Karnataka (Class of 2026)</h3>
                    <h4 className="description typing">
                        🚀 Pre-final Year | Media Head @IEEE NITK 🎥 | Creative Designer @P&L NITK 🎨 <br />
                        Full-Stack Developer (MERN) | C++ Wizard | IT Enthusiast 🖥️
                    </h4>
                    <br />
                    <p className="tagline typing">
                        Building dynamic web experiences and bringing creative ideas to life!
                    </p>
                </div>
                <button className="cta-button">
                    <Link to="/contact" className="button-link">
                        🌐 Explore My Links
                    </Link>
                </button>
            </div>

        </>
    );
}

export default Home;