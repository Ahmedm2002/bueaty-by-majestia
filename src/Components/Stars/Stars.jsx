import React from "react";
import Star from "../Stars/Star.jsx";

function Stars({ stars = "4.0" }) {
  const filledStars = Math.floor(stars);
  const unfilledStars = 5 - filledStars;

  return (
    <div className="inline-flex items-center space-x-1">
      <p className="text-sm bg-yellow-300 rounded px-1">{stars}</p>
      {Array.from({ length: filledStars }, (_, index) => (
        <Star key={index} />
      ))}
      {Array.from({ length: unfilledStars }, (_, index) => (
        <Star
          key={index + filledStars}
          isFilled={false}
        />
      ))}
    </div>
  );
}

export default Stars;
