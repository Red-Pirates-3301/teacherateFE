import React, { useState, useEffect } from "react";

function Countdown() {
  const startDate = new Date("2023-03-15T00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(startDate - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = startDate - now;
      setTimeRemaining(distance);
      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="countdown">
      Ends in: {days}:{hours}:{minutes}:{seconds}   
    </div>
  );
}

export default Countdown;
