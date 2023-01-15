import React from "react";
import projects from "./Project.module.css";
import Card from "../card/Card";
import Card1 from "../card/Card1";
import Card2 from "../card/Card2";
import Card3 from "../card/Card3";

const Projects = () => {
  return (
    <div className={projects.container} id="project">
      <h1>Project</h1>
      <div className={projects.slide}>
        <Card />
      </div>
      <div className={projects.slide1}>
        <Card1 />
      </div>
      <div className={projects.slide2}>
        <Card2 />
      </div>
      <div className={projects.slide3}>
        <Card3 />
      </div>
    </div>
  );
};

export default Projects;
