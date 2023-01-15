import React from "react";
import Header from "../../components/header/Header";
import home from "./Home.module.css";
import Service from "../../components/services/Services";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import Blog from "../../components/blog/Blog";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import my_pic from "../../assets/my_pic.png";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const fadeInX = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 5, ease: "easeInOut" },
  };

  const fadeIn_X = {
    initial: { x: 500, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 5, ease: "easeInOut" },
  };

  return (
    <div>
      <Header />
      <div className={home.container}>
        <motion.div
          variants={fadeInX}
          initial={fadeInX.initial}
          animate={fadeInX.animate}
          className={home.info}
        >
          <p className={home.line_one}>hello, i'm</p>
          <h1 className={home.line_two}>mohamed thawfeek</h1>
          <div className={home.line_three}>
            <div className={home.static_txt}>a </div>
            <ul className={home.dynamic_txt}>
              <li>
                <span>full stack web developer</span>
              </li>
              <li>
                <span>web designer</span>
              </li>
            </ul>
          </div>
          <p className={home.line_four}>
            i'm web developer based in india, and i'm very passionate and
            dedicated to my work
          </p>
          <div className={home.line_five}>
            <div className={home.abt}>
              <Link to="about" smooth={true} duration={2000}>
                About
              </Link>
            </div>
            <div className={home.social_net}>
              <a
                href="https://www.facebook.com/thawfeek.thaw"
                target="_blank"
                rel="noreferrer"
                className={home.icons}
              >
                <FontAwesomeIcon icon={faFacebookF} className={home.brand} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-thawfeek-346a23220"
                target="_blank"
                rel="noreferrer"
                className={home.icons}
              >
                <FontAwesomeIcon icon={faLinkedinIn} className={home.brand} />
              </a>
              <a
                href="https://www.instagram.com/smart_thawfeek_"
                target="_blank"
                rel="noreferrer"
                className={home.icons}
              >
                <FontAwesomeIcon icon={faInstagram} className={home.brand} />
              </a>
              <a
                href="https://github.com/MohamedThawfeek?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className={home.icons}
              >
                <FontAwesomeIcon icon={faGithub} className={home.brand} />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn_X}
          initial={fadeIn_X.initial}
          animate={fadeIn_X.animate}
          className={home.img}
        >
          <img src={my_pic} alt="my_pic" />
        </motion.div>
      </div>
      <Service />
      <Skills />
      <Projects />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
