import React from "react";
import footer from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={footer.container}>
      <div className={footer.designer_info}>
        <span>
          Developed by
          <strong>thawfeek</strong>© 2022
        </span>
      </div>
      <div className={footer.terms}>
        <ul>
          <li>Terms & Condition</li>
          <li> Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
