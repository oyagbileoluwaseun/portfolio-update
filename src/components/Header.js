import React from "react";
import { motion } from "framer-motion";
import logo from "../images/logopn.png";
import "./Header.css";

const text1 = "Oyagbile Oluwaseun";

const spanVariants = {
  visible: { y: 0, scaleY: 1 },
  hover: {
    y: [-1, -2, -2.8, 0.9, 0],
    scaleY: [1, 1.3, 0.8, 1, 1.2],
    color: "white",
  },
};

const Header = () => {
  return (
    <div className="hero container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            src={logo}
            alt=""
            style={{ width: "120px", marginRight: "10px" }}
          />

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#hero"
                >
                  Ho<span>me</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#aboutme"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#career"
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#contact"
                >
                  Contact Me
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-danger" type="submit">
                <a href="#contact" className="text-light text-decoration-none">
                  {" "}
                  Book an Appointment
                </a>
              </button>
            </form>
          </div>
        </div>
      </nav>{" "}
      <div className="content container" id="hero">
        <h4>Hello, my name is</h4>

        <h1>
          {text1.split("").map((letter, id) => (
            <motion.span
              key={id}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <h3>I am a Software Engineer.</h3>
        <div className="newslatter container">
          <form className="d-flex">
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Enter you email"
              required
            />
            <input type="submit" name="submit" value="Lets Connect" id="mail" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
