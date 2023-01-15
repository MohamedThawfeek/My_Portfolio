import React from "react";
import card03 from "./Card.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card2.jpg";

import { ArrowForward } from "@mui/icons-material";

const Card3 = () => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={1} className={card03.slide3}>
        <SwiperSlide>
          <div className={card03.card}>
            <img src={card1} alt="" />
            <p>fullstack</p>
            <h4>amazon clone</h4>
            <a
              href="https://my-first-amazon-clone-app.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              view project <ArrowForward className={card03.arrow} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card03.card}>
            <img src={card2} alt="" />
            <p>fullstack</p>
            <h4>url short</h4>
            <a
              href="https://my-first-url-shortener.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              view project <ArrowForward className={card03.arrow} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card03.card}>
            <img src={card3} alt="" />
            <p>fullstack</p>
            <h4>linked-in clone</h4>
            <a
              href="https://link-in-4783a.firebaseapp.com"
              target="_blank"
              rel="noreferrer"
            >
              view project <ArrowForward className={card03.arrow} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card03.card}>
            <img src={card4} alt="" />
            <p>fullstack</p>
            <h4>chat-app</h4>
            <a
              href="https://my-first-mern-chat-app.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              view project <ArrowForward className={card03.arrow} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card03.card}>
            <img src={card5} alt="" />
            <p>front-end</p>
            <h4>recipe</h4>
            <a
              href="https://my-first-recipe-application.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              view project <ArrowForward className={card03.arrow} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={card03.card}>
            <img src={card6} alt="" />
            <p>backend</p>
            <h4>hospital management </h4>
            <a
              href="https://wizz-hospital-mgmt.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              view project <ArrowForward className={card03.arrow} />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Card3;
