import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>
        &copy; {new Date().getFullYear()} SEMChronicles | All rights reserved
      </h4>
      <div className="footerLinks">
        <a href="https://github.com/Fnilsson95" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
