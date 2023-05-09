import React from "react";
import "./styles/About.css";
import { DevCard } from "./DevCard";
const About = () => {
  const devs = [
    {
      id: 1,
      name: "Nikhil Patil",
      desc: {
        "Roll NO.": 223337,
        "Enrollment NO.": 2000430210,
        Responsibility:
          "He was responsible for deploying both the frontend and backend API on a single Azure VPS with proper configurations.",
      },
      imgSrc: "/devLogo.png",
    },
    {
      id: 2,
      name: "MohammadJunaid Bargir",
      desc: {
        "Roll NO.": 223338,
        "Enrollment NO.": 2100430307,
        Responsibility:
          "He was responsible for deciding and assembling the hardware components. And also to make the module working.",
      },
      imgSrc: "/devLogo.png",
    },
    {
      id: 3,
      name: "Zahoorahmed Sayyad",
      desc: {
        "Roll NO.": 223339,
        "Enrollment NO.": 2000430282,
        Responsibility:
          "He was responsible for designing and building the frontend of the application from React.js. And also integrating the map in the application.",
      },
      imgSrc: "/devLogo.png",
    },
    {
      id: 4,
      name: "Rohit Jadhav",
      desc: {
        "Roll NO.": 223340,
        "Enrollment NO.": 2015770043,
        Responsibility:
          "He was responsible for developing the backend of the application in Express.js and make sure that both the frontend and the Arduino module are able to properly connect to the API.",
      },
      imgSrc: "/devLogo.png",
    },
  ];

  return (
    <main>
      <div className="aboutPoster">
        <h3>Optimized Tracking Solution for Your College.</h3>
        <h2>Developed By</h2>
      </div>
      <div className="cardContainer">
        {devs.map((dev) => (
          <DevCard key={dev.id} {...dev} />
        ))}
      </div>
    </main>
  );
};

export default About;
