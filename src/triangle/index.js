import React from "react";
import "./style.css";

const DrawTriangle = () => {
  const width = [
    "80px",
    "130px",
    "180px",
    "230px",
    "280px",
    "330px",
    "380px",
    "430px",
    "480px",
    "530px",
  ];

  return (
    <div className="container">
      <div>
        <h1>X</h1>
        {width.map((draw) => (
          <div className="flex" style={{ width: `${draw}` }}>
            <h1>X</h1>
            <h1>X</h1>
          </div>
        ))}
        <div className="flex" style={{ width: "580px" }}>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
        </div>
      </div>
    </div>
  );
};

export default DrawTriangle;
