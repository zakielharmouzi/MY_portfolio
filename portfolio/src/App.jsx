import React from 'react';
import FollowCar from './FollowCar';
import Bg_stars from './bg_round';
import './App.css';
import './car.css';
import './tailwind.css'

function App() {
  return (
    <div className="bg-black">
      <Bg_stars />
      <FollowCar />
    </div>
  );
}

export default App;
