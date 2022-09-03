import React from "react";
import logo1 from "../Assets/Img/logo1.png"

const Footer = (props) => {
  return (
    <footer className="footer">

      <img className="logof" src={logo1} alt="" />

      <p className="msg">{props.msg} </p>
    </footer>
  );
};
export default Footer;