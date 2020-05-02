import React from "react";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import "./styles.css";

function Footer() {
  return (
    <div className="footer-container">
      <p>Desenvolvido por: Nicholas Brutti 2020 &copy;</p>
      <div className="social-media">
        <FiGithub size={22} />
        <FiMail size={22} />
        <FiLinkedin size={22} />
        <FiFacebook size={22} />
        <FiInstagram size={22} />
      </div>
    </div>
  );
}

export default Footer;
