import React from "react";
import { FaStar } from "react-icons/fa";

const RandomStars = () => {
  // Generate a random number of yellow stars between 1 and 5
  const yellowStars = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < yellowStars ? "text-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default RandomStars;
