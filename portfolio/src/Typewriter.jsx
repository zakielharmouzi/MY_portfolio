import React, { useState, useEffect } from "react";

function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const writeText = () => {
      setDisplayText(text.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        setIsDeleting(true);
        currentIndex--;
        timeoutId = setTimeout(deleteText, 500);
      } else {
        timeoutId = setTimeout(writeText, 100);
      }
    };

    const deleteText = () => {
      setDisplayText(text.slice(0, currentIndex));
      currentIndex--;
      if (currentIndex === 0) {
        setIsDeleting(false);
        timeoutId = setTimeout(writeText, 500);
      } else {
        timeoutId = setTimeout(deleteText, 50);
      }
    };

    timeoutId = setTimeout(writeText, 100);

    return () => clearTimeout(timeoutId);
  }, [text]);

  return <span>{displayText}</span>;
}

export default Typewriter;
