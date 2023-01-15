import React, { useEffect } from "react";
import about from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faDesktop } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: "linear",
      delay: 200,
    });
  }, []);
  return (
    <div className={about.container} id="about">
      <h1>About</h1>
      <div className={about.content}>
        <div className={about.education} data-aos={"fade-up-right"}>
          <h2>
            <FontAwesomeIcon icon={faUserGraduate} className={about.icon} />
            education
          </h2>
          <div className={about.details}>
            <h4>Periyar centenary polytechnic college</h4>
            <p>Diploma in computer technology </p>
            <small>2014-2018</small>
            <hr />
            <h4>kamala subramaniam hr.sec.school</h4>

            <p
              style={{
                textTransform: "uppercase",
              }}
            >
              ssc
            </p>
            <small>2012-2013</small>
            <hr />
          </div>
        </div>
        <div className={about.tech} data-aos={"fade-up-left"}>
          <h2>
            <FontAwesomeIcon icon={faDesktop} className={about.icon} />
            tech,courses
          </h2>
          <div className={about.details}>
            <h4>full stack web development</h4>
            <p>full stack web development </p>
            <small>august2021 - january2022</small>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
