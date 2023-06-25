import React, { createContext, useState } from 'react';
import FollowCar from './FollowCar';
import Bg_stars from './bg_round';
import Navbar from './navbar';
import About from './about';
import Skills from './skills';
import Roadmap from './roadmap';
import './App.css';
import './car.css';
import './tailwind.css';

function App() {
  
return (
      <>
        <Navbar />
        <Bg_stars />
        <About />
        <Skills />
        <Roadmap />
      </>
  );
}

export default App;
