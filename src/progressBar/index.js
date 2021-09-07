import React, { useState } from "react";

import "./style.css";

const ProgressBar = () => {
  const [dash, setDash] = useState(200);
  const [number, setNumber] = useState(75);

  const strokeDash = {
    strokeDasharray: 700,
    strokeDashoffset: dash,
  };

  const increaseDash = () => {
    setDash(dash - 35);
  };

  const increaseNumber = () => {
    setNumber(number + 5);
  };

  const decreaseDash = () => {
    setDash(dash + 35);
  };

  const decreaseNumber = () => {
    setNumber(number - 5);
  };

  return (
    <div className="container-progress">
      <div>
        <div className="container-circle">
          <svg>
            <circle className="inner" cx="150" cy="150" r="100" />
            <circle
              className="bar"
              style={strokeDash}
              cx="150"
              cy="150"
              r="100"
            />
          </svg>
          <div className="counter">{number}%</div>
        </div>
        <div className="button-contain">
          {number <= 0 ? (
            <button
              className="button"
              style={{ backgroundColor: "#c4c4c4" }}
              disabled
            >
              -
            </button>
          ) : (
            <button
              className="button"
              onClick={() => {
                decreaseDash();
                decreaseNumber();
              }}
            >
              -
            </button>
          )}
          {number >= 100 ? (
            <button
              className="button"
              style={{ backgroundColor: "#c4c4c4" }}
              disabled
            >
              +
            </button>
          ) : (
            <button
              className="button"
              onClick={() => {
                increaseDash();
                increaseNumber();
              }}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
