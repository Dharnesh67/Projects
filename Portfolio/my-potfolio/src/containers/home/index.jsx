import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home_text">
                    <h1 className="typing">Hello I Am Dharmesh Raikwar </h1>
                    <br />
                    <h3 className="typing">National Institute of Technology, Karnataka (2026)</h3>
                    <h4 className="typing">
                    Pre finalyear student @ Nitk'26| Media Head @IEEE || Designer @P&L NITK | MERN Stack | C++ | Minor IT
                    </h4>
                    <br />
                </div>
                <button className="buttonan" > <Link to='/contact' className="button">
                    Contact Me
                </Link></button>
            </div>
        </>
    );
}

export default Home;