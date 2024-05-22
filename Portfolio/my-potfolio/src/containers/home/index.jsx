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
                    <h3 className="typing">National Institute of Technology, Karnataka</h3>
                    <h4 className="typing">
                        Minor In IT | IEEE NITK |Skilled in C++ |Passionate about coding/Development
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