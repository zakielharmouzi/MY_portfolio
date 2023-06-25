import React, { createContext, useContext, useState,useEffect} from "react";
import Typewriter from "typewriter-effect";
import Zaki from "./Zaki.jpg";
import GuideContext from "./carcontext";
import FollowCar from "./FollowCar";

function Bg_stars() {
  
  const [isGuideUnlocked, setIsGuideUnlocked] = useState(false);

  const handleClick = () => {
    if (isGuideUnlocked) {
      setIsGuideUnlocked(false);
    }
    else {
      setIsGuideUnlocked(true);
    }

  };


  return (
    <GuideContext.Provider value={{ isGuideUnlocked, setIsGuideUnlocked }}>
      <div className="relative bg-black h-[79vh]">
        <div className="bg-gradient-to-r from-gray-700 to-black-500 h-full w-1/2 transform absolute top-0 left-0"></div>
        <div className="absolute inset-0 flex flex-wrap">
          <div className="w-1/2 flex items-center justify-center">
            <div className="text-gray-100 text-center">
              <h1 className="text-3xl font-bold md:text-5xl">
                Hello, my name is Zakaria
              </h1>
              <h2 className="text-2xl font-bold md:text-4xl">I am a</h2>
              <h2 className="text-1xl font-bold md:text-4xl">
                <Typewriter
                  options={{
                    strings: [
                      "programmer",
                      "researcher",
                      "racer",
                      "gamer",
                      "",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <button
                className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-lg shadow-lg animate-pulse"
                onClick={handleClick} // Call the handleClick function on button click
              >
                Click Me for a surprise
                
              </button>
            {isGuideUnlocked ? (<FollowCar />) :(null)}
              </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="max-h-full overflow-hidden rounded-lg shadow-lg">
              <img
                className="h-full object-cover object-center"
                src={Zaki}
                alt="me"
              />
            </div>
          </div>
        </div>
      </div>
    </GuideContext.Provider>
  );
}

export default Bg_stars;
