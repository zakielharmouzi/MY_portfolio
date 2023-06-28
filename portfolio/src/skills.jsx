import React, { useEffect, useRef } from "react";
import ProgressBar from "progressbar.js";
import "./circle.css";
import SupabaseImage from "./assets/supabase.jpg";
import PythonImage from "./assets/python_logo.jpg";
import JavascriptImage from "./assets/JS_logo.png";
import SQLImage from "./assets/SQL_logo.png";
import HTMLImage from "./assets/HTML_logo.png";
import CSSImage from "./assets/CSS_logo.png";
import REACTImage from "./assets/REACT_logo.png";
import TailwindImage from "./assets/Tailwind_logo.png";
import CImage from "./assets/C_logo.png";
import Cimage from "./assets/C_logo-removebg-preview.png"
import JssImage from "./assets/JS_logo-removebg-preview.png"

function Skills() {
  const progressRefs = useRef([]);
  const scrollListenerRef = useRef(null);

  useEffect(() => {
    const progressBars = progressRefs.current.map((ref, index) => {
      const progressBar = new ProgressBar.Circle(ref, {
        strokeWidth: 6,
        easing: "easeInOut",
        duration: 2000,
        color: skillsData[index].color,
        trailColor: "#D1D5DB",
        trailWidth: 6,
        text: {
          style: {
            color: "#000000",
            fontSize: "16px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          },
          autoStyleContainer: false,
        },
      });

      return progressBar;
    });

    const handleImageLoad = () => {
      if (scrollListenerRef.current) {
        window.removeEventListener("scroll", scrollListenerRef.current);
        scrollListenerRef.current = null;
      }

      scrollListenerRef.current = () => {
        progressBars.forEach((progressBar, index) => {
          const progressValue = getProgressValue(index + 1);
          if (isElementInViewport(progressRefs.current[index])) {
            progressBar.animate(progressValue);
          }
        });
      };

      window.addEventListener("scroll", scrollListenerRef.current);
      scrollListenerRef.current();
    };

    const images = document.getElementsByClassName("skill-image");
    Array.from(images).forEach((image) => {
      image.addEventListener("load", handleImageLoad);
    });

    return () => {
      if (scrollListenerRef.current) {
        window.removeEventListener("scroll", scrollListenerRef.current);
      }
      Array.from(images).forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
      progressBars.forEach((progressBar) => progressBar.destroy());
    };
  }, []);

  const skillsData = [
    { id: 1, name: "HTML", image: HTMLImage, color: "#FF6347" },
    { id: 2, name: "CSS", image: CSSImage, color: "#4169E1" },
    { id: 3, name: "JavaScript", image: JssImage, color: "#FFD700" },
    { id: 4, name: "React", image: REACTImage, color: "#61DAFB" },
    { id: 5, name: "Python", image: PythonImage, color: "#FFD700" },
    { id: 6, name: "Supabase", image: SupabaseImage, color: "#10B981" },
    { id: 7, name: "SQL", image: SQLImage, color: "#808080" },
    { id: 8, name: "Tailwind", image: TailwindImage, color: "#092E20" },
    { id: 9, name: "C", image: Cimage, color: "#FF6347" },
  ];

  const getProgressValue = (skillIndex) => {
    switch (skillIndex) {
      case 1:
        return 0.76;
      case 2:
        return 0.5;
      case 3:
        return 0.85;
      case 4:
        return 0.9;
      case 5:
        return 0.6;
      case 6:
        return 0.7;
      case 7:
        return 0.8;
      case 8:
        return 0.6;
      case 9:
        return 0.9
      default:
        return 0;
    }
  };

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div className="container mx-auto p-4 bg-black">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <div className="flex flex-wrap">
        {skillsData.map((skill) => (
          <div key={skill.id} className="w-1/3 flex items-center mb-4">
            <div className="w-20 h-20 mr-4 relative flex-circle">
              <div
                ref={(ref) => (progressRefs.current[skill.id - 1] = ref)}
                className="progress-circle"
              ></div>
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-full object-contain skill-image"
              />
              <div className="circle-overlay"></div>
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
