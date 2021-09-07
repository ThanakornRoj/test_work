import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Homepage = () => {
  return (
    <div className="container-home">
      <div>
        <div>
          <Link to="/progress-bar">
            <button className="button-home">Progress Bar</button>
          </Link>
        </div>
        <div>
          <Link to="/triangle">
            <button className="button-home">Triangle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
