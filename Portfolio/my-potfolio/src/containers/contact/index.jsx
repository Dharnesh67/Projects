import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Contact = () => {
  const Contact = [
    {
      title: "Github",
      image: "https://img.icons8.com/ios/452/github.png",
      link: "https://github.com/Dharnesh67",
    },
    {
      title: "Linkedin",
      image: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
      link: "https://www.linkedin.com/in/dharmesh-raikwar-96578022b/",
    },
    {
      title: "Codechef",
      image: "https://img.icons8.com/ios/452/codechef.png",
      link: "https://www.codechef.com/users/raikwardharmes",
    },
    {
      title: "Leetcode",
      image: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000",
      link: "https://leetcode.com/u/Dharmesh004/",
    },
  ];
  return (
    <div className="contact">
      <div className="cards">
        {Contact.map((item, i) => {
          return (
            <div key={i}>
              <div className="group">
                <Link to={item.link != "" ? item.link : ""}>
                  <div className="card">
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
        <div className="Mail">
          <img src="https://img.icons8.com/?size=100&id=PuMBlD0n7QJD&format=png&color=000000" alt="" />

          <p>raikwardharmesh67@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
