import React, { useEffect } from "react";
import Cards from "../serviceCard/Cards";
import service from "./Services.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 1000,
      easing: "linear",
      delay: 200,
    });
  }, []);
  return (
    <div className={service.container} id="service">
      <h1>Services</h1>
      <h2>Develope that solve problems, one product at a time</h2>
      <div className={service.card}>
        <Cards
          title={"what i can do for you"}
          subtitle={
            "faster better products that your user love here's all the services provide"
          }
          skill={"web design"}
          skill1={"front-end development"}
          skill2={"back-end development"}
          aos={"fade-up"}
        />
        <Cards
          title={"language i'm fluent in"}
          subtitle={
            "every developer needs the right tools to do the perfect job"
          }
          skill={"react js"}
          skill1={"node js"}
          skill2={"mongo dB"}
          aos={"flip-up"}
        />
        <Cards
          title={"what you can expert "}
          subtitle={
            "i design product that are more than pretty i make the shippable and useable"
          }
          skill={"clean and functional"}
          skill1={"device and user friendly"}
          skill2={"efficient and maintainable"}
          aos={"fade-up"}
        />
      </div>
    </div>
  );
};

export default Services;
