import React from "react";
import skills from "./ProgressBar.module.css";

const ProgressBar5 = ({ numbers, image, aos }) => {
  return (
    <div className={skills.container4} data-aos={aos}>
      <div className={skills.skill}>
        <div className={skills.outer_circle}>
          <div className={skills.inner_circle}>
            <div className={skills.number}>
              <img src={image} alt="" />
              <h5>{numbers}%</h5>
            </div>
          </div>
        </div>

        <svg
          className={skills.svg}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
            className={skills.circle4}
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressBar5;
