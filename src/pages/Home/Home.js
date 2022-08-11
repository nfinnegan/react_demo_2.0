import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="container toggleImages">
        <div>
          <img
            id="img1"
            src="/assets/toggle.png"
            className="img-responsive"
            alt="toggleThumbsUp"
          />
        </div>
        <div>
          <img
            id="img2"
            className="img-responsive card-img-top"
            src="/assets/LD-Toggle-Posed-Lounge-v11Aalpha.png"
            alt='toggleLaidBack"'
          />
        </div>
      </div>
      <div className="container btnsGrouped">
        <button type="button" className="enterBtn btn btn-light">
          Enter Here
        </button>
        <button type="button" className="enterBtn btn btn-light">
          Enter Here
        </button>
      </div>
    </div>
  );
};
