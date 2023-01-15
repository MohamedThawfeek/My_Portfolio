import React, { useState } from "react";
import blog from "./Blog.module.css";
import firstBlog from "../../assets/developer.jpg";
import middleBlog from "../../assets/brand.webp";
import lastBlog from "../../assets/social_media.jpg";
import Popup from "../popup/Popup";

const Blog = () => {
  const [popUp, setPopUp] = useState(false);
  const [popUp1, setPopUp1] = useState(false);
  const [popUp2, setPopUp2] = useState(false);

  if (popUp) {
    document.body.classList.add(`${blog.active_model}`);
  } else {
    document.body.classList.remove(`${blog.active_model}`);
  }

  if (popUp1) {
    document.body.classList.add(`${blog.active_model1}`);
  } else {
    document.body.classList.remove(`${blog.active_model1}`);
  }

  if (popUp2) {
    document.body.classList.add(`${blog.active_model2}`);
  } else {
    document.body.classList.remove(`${blog.active_model2}`);
  }

  const handelChange = () => {
    setPopUp(!popUp);
  };

  const handelChange1 = () => {
    setPopUp1(!popUp1);
  };

  const handelChange2 = () => {
    setPopUp2(!popUp2);
  };
  return (
    <div className={blog.container} id="blog">
      <h1>Blogs</h1>
      <div className={blog.content}>
        <div className={blog.img} onClick={handelChange}>
          <img src={firstBlog} alt="" />
          <h4>Web Development</h4>
          <p>Jim Morisson Says when the musics over turn off the light</p>
        </div>

        <div className={blog.img} onClick={handelChange1}>
          <img src={middleBlog} alt="" />
          <h4>Branding</h4>
          <p>The best laptops for programming in 2022</p>
        </div>

        <div className={blog.img} onClick={handelChange2}>
          <img src={lastBlog} alt="" />
          <h4>Social Media</h4>
          <p>How designers and developers can collaborate better</p>
        </div>
      </div>

      {popUp && (
        <Popup
          close={handelChange}
          image={firstBlog}
          head={"Jim Morisson Says when the musics over turn off the light"}
          title={"Web Development"}
          p1={
            "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line."
          }
          p2={
            "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business. "
          }
        />
      )}

      {popUp1 && (
        <Popup
          close={handelChange1}
          image={middleBlog}
          head={"The best laptops for programming in 2022"}
          title={"Branding"}
          p1={`The best laptops for programming can make coding a joy, no matter if you're a professional developer or someone who likes to code for a hobby.

              Using a laptop to create websites, applications and games gives you flexibility to work wherever you like, and in these days of hybrid working, where many of us mix working from home with trips to the office, that can be hugely beneficial.
              
              Unlike some tasks, coding on a laptop doesn't necessarily have to require powerful components. However, if you also want to compile, run and test your code, investing in a powerful laptop could really pay off.
              
              A powerful laptop can quickly compile code so you can try out your work, and the faster this happens, the faster your project will complete, which means you can take on more work. 
              
              Meanwhile, particularly powerful laptops can emulate various devices so you can see how well your project runs on a variety of hardware, which can also be extremely useful.`}
          p2={`
               When looking for a laptop for programming, you'll want something with a modern processor and a decent amount of RAM, ideally 16GB. A large screen with a high resolution is also preferable, as it will mean working on the laptop will be more comfortable. A 16:10 aspect ratio screen, which an increasing number of laptops now come with, can also make a difference, as it's taller than the standard widescreen aspect ratio of 16:9, which means you can see more of your code on screen without needing to scroll up and down.

               A great laptop for coding should also come with a brilliant keyboard that's comfortable and responsive, as you're going to be typing out a lot of code on it. Also, if you're doing game development, then you'll want a laptop that can play your game while you test it, so a laptop with a graphics card is worth considering.

              Also, it's a good idea to complement your laptop with some top accessories too. Check out our guides to the best monitors for programming, and the best keyboard and best mouse.`}
        />
      )}

      {popUp2 && (
        <Popup
          close={handelChange2}
          image={lastBlog}
          head={"How designers and developers can collaborate better"}
          title={"Social Media"}
          p1={
            "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line."
          }
          p2={
            "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
          }
        />
      )}
    </div>
  );
};

export default Blog;
