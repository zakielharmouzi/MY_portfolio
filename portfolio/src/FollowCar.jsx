import React, { useState, useEffect } from 'react';
import carImg from "./rl_car.jpg"
import "./car.css"

function FollowCar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    function handleMouseMove(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // calculate vector from current position to mouse position
      const deltaX = mouseX - position.x;
      const deltaY = mouseY - position.y;

      // calculate angle between vector and x-axis
      const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

      // calculate new position with easing
      const easingFactor = 0.10;
      const newX = position.x + deltaX * easingFactor;
      const newY = position.y + deltaY * easingFactor;

      // update car position and rotation
      setPosition({ x: newX, y: newY });
      setRotation(angle);
    }

    window.addEventListener('mousemove', handleMouseMove);

    // start the interval to update the comment
    
  // start the interval to update the comment
  const commentInterval = setInterval(() => {
    // generate a random comment
    const comments = [      "Did you know that JavaScript was created in just 10 days?",      "Fun fact: The first computer programmer was a woman named Ada Lovelace",      "Java and JavaScript are not related programming languages!",      "Debugging is like being a detective in a crime movie where you are also the murderer",      "Have you ever heard of the concept of callback hell? It's a thing in async programming!",      "You can build amazing things with React, like this cool car that follows your cursor!",      "Zakaria can't hit an open net in rocket league",      "Zakaria loves driving me,.... INSANE"    ];
    const randomComment = comments[Math.floor(Math.random() * comments.length)];

    // show the comment box with the new comment
    setComment(randomComment);
    setTimeout(() => {
      // hide the comment box after 2 seconds
      setComment(null);
    }, 3000);
  }, 5000);

  // clean up the interval on unmount
  return () => clearInterval(commentInterval);
}, [position]);


  return (
      <>
      {comment && <div className="comment-box" style={{left: position.x + 50, top: position.y - 50}}>{comment}</div>}
      <div
        className="car"
        style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)`, left: position.x, top: position.y }}
      >
        <img className="lil_car" src={carImg} alt="car" />
      </div>
      </>
    
  );
}

export default FollowCar;
