import React, { useState, useEffect } from "react";
import skills from "./Skills.module.css";
import html from "../../assets/1html.png";
import css from "../../assets/2css.png";
import js from "../../assets/3js.png";
import bootstrap from "../../assets/4bootstrap.png";
import material from "../../assets/5mui.png";
import nodejs from "../../assets/6nodejs.png";
import react from "../../assets/7react.png";
import redux from "../../assets/8redux.png";
import mongoose from "../../assets/9mongoose.png";
import firebase from "../../assets/10firebase.png";
import aws from "../../assets/11aws.png";
import github from "../../assets/12github.png";
import ProgressBar1 from "../progressbar/ProgressBar1";
import ProgressBar2 from "../progressbar/ProgressBar2";
import ProgressBar3 from "../progressbar/ProgressBar3";
import ProgressBar4 from "../progressbar/ProgressBar4";
import ProgressBar5 from "../progressbar/ProgressBar5";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [numbers, setNumbers] = useState(0);
  const [numbers1, setNumbers1] = useState(0);
  const [numbers2, setNumbers2] = useState(0);
  const [numbers3, setNumbers3] = useState(0);
  const [numbers4, setNumbers4] = useState(0);

  useEffect(() => {
    let pers = 0;
    setInterval(() => {
      if (pers === 80) {
        clearInterval();
      } else {
        setNumbers3((pers += 1));
      }
    }, 30);
  }, []);

  useEffect(() => {
    let pers = 0;
    setInterval(() => {
      if (pers === 88) {
        clearInterval();
      } else {
        setNumbers((pers += 1));
      }
    }, 30);
  }, []);

  useEffect(() => {
    let pers = 0;
    setInterval(() => {
      if (pers === 85) {
        clearInterval();
      } else {
        setNumbers1((pers += 1));
      }
    }, 33);
  }, []);

  useEffect(() => {
    let pers = 0;
    setInterval(() => {
      if (pers === 90) {
        clearInterval();
      } else {
        setNumbers2((pers += 1));
      }
    }, 30);
  }, []);

  useEffect(() => {
    let pers = 0;
    setInterval(() => {
      if (pers === 80) {
        clearInterval();
      } else {
        setNumbers3((pers += 1));
      }
    }, 30);
  }, []);

  useEffect(() => {
    let pers = 0;
    setInterval(() => {
      if (pers === 50) {
        clearInterval();
      } else {
        setNumbers4((pers += 1));
      }
    }, 50);
  }, []);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 2000,
      easing: "linear",
      delay: 200,
    });
  }, []);
  return (
    <div className={skills.container}>
      <h1>Skills</h1>
      <div className={skills.animate_circle}>
        <ProgressBar1 numbers={numbers} image={html} aos="fade-up-right" />
        <ProgressBar1 numbers={numbers} image={css} aos="fade-up" />
        <ProgressBar1 numbers={numbers} image={js} aos="fade-up" />
        <ProgressBar2 numbers={numbers1} image={bootstrap} aos="fade-up" />
        <ProgressBar2 numbers={numbers1} image={material} aos="fade-right" />
        <ProgressBar3 numbers={numbers2} image={nodejs} aos="fade-left" />
        <ProgressBar3 numbers={numbers2} image={react} aos="fade-right" />
        <ProgressBar3 numbers={numbers2} image={redux} aos="fade-left" />
        <ProgressBar3 numbers={numbers2} image={mongoose} aos="fade-up" />
        <ProgressBar4 numbers={numbers3} image={firebase} aos="fade-up" />
        <ProgressBar5 numbers={numbers4} image={aws} aos="fade-right" />
        <ProgressBar4 numbers={numbers3} image={github} aos="fade-left" />
      </div>
    </div>
  );
};

export default Skills;
