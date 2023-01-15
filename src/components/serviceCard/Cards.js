import React from "react";
import serviceCard from "./Cards.module.css";

const Cards = ({ title, subtitle, skill, skill1, skill2, aos, aos1 }) => {
  return (
    <div
      className={serviceCard.container}
      data-aos={aos}
      data-aos-anchor-placement={aos1}
    >
      <h3>{title}</h3>
      <span>{subtitle}</span>
      <ul>
        <li>{skill}</li>
        <li>{skill1}</li>
        <li>{skill2}</li>
      </ul>
    </div>
  );
};

export default Cards;
