import React, { useState, useEffect, useRef } from "react";
import "./about.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`flex flex-col items-start justify-start min-h-[80vh] bg-slate-800 p-8 ${
        isVisible ? "fade-in" : "fade-out"
      } transition-opacity duration-1000`}
    >
      <h1 className="text-5xl text-white font-bold mb-4">About Me</h1>
      <p className="text-white mb-8">
        My name is Zakaria Elharmouzi. I am a sophomore at AUI, majoring in Computer Science and minoring in Business Administration.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="card bg-gray-800 text-white text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Front-end Development</h2>
          <p className="text-gray-300">
            I specialize in creating engaging and responsive user interfaces using modern front-end technologies like HTML, CSS, and JavaScript frameworks.
          </p>
        </div>
        <div className="card bg-gray-800 text-white text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Backend Development</h2>
          <p className="text-gray-300">
            I have experience in building server-side applications and APIs using frameworks like Node.js and languages like Python. I enjoy working with databases and optimizing performance.
          </p>
        </div>
        <div className="card bg-gray-800 text-white text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Data Scraping</h2>
          <p className="text-gray-300">
            I have knowledge of web scraping techniques and tools to extract data from various sources. I can efficiently gather and process data for analysis and insights.
          </p>
        </div>
        <div className="card bg-gray-800 text-white text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Researching</h2>
          <p className="text-gray-300">
            I enjoy conducting research and exploring new technologies. I stay updated with the latest trends and strive to continuously learn and improve my skills as a computer scientist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
