import React from "react";

function RightArrow() {
  return (
    <svg
      className="h-10 w-10"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
    >
      <line
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="26"
        y1="16"
        x2="4"
        y2="16"
      />
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        points="18,7.5 26.5,16 18,24.5 "
      />
    </svg>
  );
}

export default RightArrow;
