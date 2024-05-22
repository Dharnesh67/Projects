import React from "react";
import "./style.css";
const description = `I'm Dharmesh Raikwar, currently a sophomore at NITK ('26) and a dedicated member of IEEE NITK. My expertise lies in C++, where I thrive on crafting innovative solutions and pushing boundaries.

Beyond programming, I excel as a cinematic enthusiast, proficient in Adobe Premiere Pro and Photoshop. I specialize in transforming imagination into captivating visual narratives.

Embark with me on a journey of innovation and creativity, where the fusion of pixels and code redefines limits. Together, let's push boundaries, one line of code and one visual masterpiece at a time.`;
const About = () => {
    const personaldetail = [
        {
            label: "Name",
            value: "Dharmesh Raikwar"
        },
        {
            label: "Education",
            value: "National Institute of Technology Karnataka '2026"
        },
        {
            label: "Skills",
            value: "C++,React.js,HTML,css,JavaScript"
        },
        {
            label: "Email",
            value: "raikwardharmesh67@gmail.com"
        },
        {
            label: "Contact No",
            value: "+91-6392906704"
        },
    ];

    return (
        <div>
            <div className="about-content">
            {/* <h1 className="h1"> About</h1> */}
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="about-details">
                   <h2 className="h1">Personal Details</h2>
                   <ul className="list ">
                        {personaldetail.map((items,index)=>(
                            <li className="li" key={index}><div className="label">{items.label +':'}</div><div className="val">{items.value}</div></li>
                        ))}
                   </ul>
                </div>
            </div>
        </div>
    );
}

export default About;