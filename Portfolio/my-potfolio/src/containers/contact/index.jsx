import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const Contact = [
    {
      title: "Leetcode",
      image: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000",
      link: "https://leetcode.com/u/Dharmesh004/",
    },
    {
      title: "CodeForces",
      image: "https://pruthvi02.wordpress.com/wp-content/uploads/2020/10/code.jpg",
      link: "https://codeforces.com/profile/Dharmesh__04",
    },
    {
      title: "Linkedin",
      image: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
      link: "https://www.linkedin.com/in/dharmesh-raikwar-96578022b/",
    },
    {
      title: "Github",
      image: "https://img.icons8.com/ios/452/github.png",
      link: "https://github.com/Dharnesh67",
    },
    {
      title: "Codechef",
      image: "https://yt3.googleusercontent.com/Lkx3tvgHdRADC3wXQ5TfJZRTeH4nboEPA_-eJChOZ6jRkOdY35lcg014Whj36rHFXhrHY1T_4cs=s900-c-k-c0x00ffffff-no-rj",
      link: "https://www.codechef.com/users/raikwardharmes",
    },
  ];

  return (
    <div className="contact">
      <h2 className="contact-title">Let's Connect!</h2>
      <div className="cards">
        {Contact.map((item, i) => (
          <div key={i} className="card-container">
            <Link to={item.link || "#"} target="_blank" rel="noopener noreferrer">
              <div className="card">
                <img src={item.image} alt={item.title} className="card-image" />
                <p className="card-title">{item.title}</p>
              </div>
            </Link>
          </div>
        ))}
        <div className="card-container">
          <div className="card">
            <img
              src="https://img.icons8.com/?size=100&id=PuMBlD0n7QJD&format=png&color=000000"
              alt="Mail"
              className="card-image"
            />
            <p className="card-title">raikwardharmesh67@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
