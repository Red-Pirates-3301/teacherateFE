import React from 'react';
import "./Stars.css"

const StarRating = ({ filledStars }) => {
  const stars = [];
  const integer = Math.floor(filledStars);
  const decimal = filledStars - integer;
  
  for (let i = 0; i < integer; i++) {
    stars.push(
      <span key={i} className={`star filled`}></span>
    );
  }

  if (decimal >= 0.5) {
    stars.push(
      <span key={integer} className={`star half-filled`}></span>
    );
  } else if (decimal > 0) {
    stars.push(
      <span key={integer} className={`star`}></span>
    );
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(
      <span key={i} className={`star`}></span>
    );
  }

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;