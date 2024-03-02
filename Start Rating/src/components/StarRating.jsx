import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  const [currRate, setCurrRate] = useState(null);
  const [hoverStar, setHoverStar] = useState(null);

  return (
    <>
      {[...Array(5)].map((_, index) => {
        const currentRate = index;
        return (
          <FaStar
            size={50}
            key={index}
            onClick={() => {
              setCurrRate(currentRate);
              console.log(currentRate);
            }}
            onMouseEnter={() => setHoverStar(index)}
            onMouseLeave={() => setHoverStar(null)}
            color={
              (hoverStar !== null && hoverStar >= index) ||
              (currRate !==null && currRate >= index)
                ? "yellow"
                : "white"
            }
          />
        );
      })}
      <button
        onClick={() => {
          setCurrRate(null);
        }}
      >
        Reset
      </button>
    </>
  );
}
