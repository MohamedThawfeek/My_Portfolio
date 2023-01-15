import React from "react";
import popup from "./Popup.module.css";
import { Close } from "@mui/icons-material";

const Popup = ({ close, p1, p2, head, title, image }) => {
  return (
    <div className={popup.container}>
      <div className={popup.box}>
        <img src={image} alt="" />
        <h4>{head}</h4>
        <small>{title}</small>
        <p> {p1}</p>
        <p>{p2}</p>
      </div>
      <div className={popup.close} onClick={close}>
        <Close />
      </div>
    </div>
  );
};

export default Popup;
