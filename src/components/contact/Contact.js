import React, { useEffect, useState } from "react";
import contact from "./Contact.module.css";
import { LocalPhone, Email, LocationOn } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { Button } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        "service_uem20tb",
        "template_qiv7ghi",
        e.target,
        "GS40acueC5ka8QHZp"
      );
      alert("Your Message Has Send Successfully");
      setName("");
      setMessage("");
      setEmail("");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "linear",
      delay: 200,
    });
  }, []);

  return (
    <div className={contact.container} id="contact">
      <h1>Contact me</h1>
      <div className={contact.content}>
        <div className={contact.address} data-aos="fade-right">
          <div className={contact.location}>
            <div className={contact.icon1}>
              <LocationOn className={contact.icons} />
            </div>
            <div className={contact.info}>
              <h2>address</h2>
              <p>Somewhere in world</p>
            </div>
          </div>
          <div className={contact.email}>
            <div className={contact.icon2}>
              <Email className={contact.icons2} />
            </div>
            <div className={contact.info}>
              <h2>email</h2>
              <p
                style={{
                  textTransform: "lowercase",
                }}
              >
                thawfeek96@gmail.com
              </p>
            </div>
          </div>
          <div className={contact.phone}>
            <div className={contact.icon3}>
              <LocalPhone className={contact.icons3} />
            </div>
            <div className={contact.info}>
              <h2>phone</h2>
              <p>+91 8248383211</p>
            </div>
          </div>
        </div>
        <div className={contact.form} data-aos="fade-up">
          <form onSubmit={sendMail}>
            <label>name</label>

            <input
              name="name"
              type="text"
              placeholder="enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label>email</label>

            <input
              name="user_email"
              type="email"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label>message</label>

            <textarea
              name="message"
              placeholder="enter your message"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <Button type="submit" className={contact.button}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
