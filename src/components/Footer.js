import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://github.com/oyagbileoluwaseun">
            <i className="fa fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/oluwaseunoyagbile">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://twitter.com/oyagbileoluwas1">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://www.facebook.com/oluwaseun.oyagbile">
            <i className="fa fa-facebook" />
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#hero">Hero</a>
          </li>
          <li className="list-inline-item">
            <a href="#aboutme">About Me</a>
          </li>
          <li className="list-inline-item">
            <a href="#career">Experience</a>
          </li>
          <li className="list-inline-item">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <p className="copyright">Oyagbile Oluwaseun © 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
