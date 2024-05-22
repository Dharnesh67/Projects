import React from "react";
import "./style.css";
import htmlImage from './html.png';
import cssImage from './css.png';
import jsImage from './js.png';
import reactImage from './react.png';
import cppImage from './cpp.png';
import nodeimage from './node.png';
import sql from './sql.png';
import mongo from './mong.png';
import tailwind from './tailwind-css-icon.png';
import Express from './pngegg.png';

const Skills = () => {
    const Frontend = [
        {
            title: "HTML",
            image: htmlImage
        },
        {
            title: "CSS",
            image: cssImage
        },
        {
            title: "JavaScript",
            image: jsImage
        },
        {
            title: "React",
            image: reactImage
        },
        {
            title: "Tailwind CSS",
            image: tailwind
        },
    ]
    const Backend=[
        {
            title: "C++ /  DSA",
            image: cppImage
        },
        {
            title: "Node.js",
            image: nodeimage
        },
        {
            title: "Express.js",
            image: Express
        },
        {
            title: "MondoDB/Mongoose",
            image: mongo
        },
        {
            title: "SQL",
            image: sql
        },
        {
            title: "Express",
            image: Express
        }
    ]
    return (
        <div>
            <div className="main">
                <div className="maincontainer">
                    <div className="leftcontainer">
                        <h1> <p>Frontend</p></h1>
                        <div className="cards">
                            {Frontend.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <div className="group">
                                            <div className="card"><img src={item.image} alt={item.title} />
                                                <p>{item.title}</p></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="rightcontainer">
                        <h1> <p>Backend</p></h1>
                        <div className="cards">
                            {Backend.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <div className="group">
                                            <div className="card"><img src={item.image} alt={item.title} />
                                                <p>{item.title}</p></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;