import React from "react";
import Aboutimg from "../../images/about.png";
import "./About.css";

const About = () => {
  return (
    <section className="about " id="aboutme">
      <div className="main row container-fluid">
        <div
          className=" container col-xl-7 col-lg-4 col-md-4 
      col-sm-6 col-xs-4"
        >
          {" "}
          <img src={Aboutimg} alt="" />
        </div>

        <div
          className="about-text container col-xl-5 
      col-lg-8 col-md-8 col-sm-6 col-xs-4"
        >
          <h2 className="text-light">About Me</h2>
          <h5 className="text-light">Software Engineer</h5>
          <p>
            I am a Software Engineer skilled in{" "}
            <span>Front-end and Back-end</span> Website development using HTML,
            CSS, JavaScript, MongoDB, Express, ReactJs & NodeJS. I am also
            familiar with Content Management Systems development using
            WordPress, Wix and Drupal. <br />
            <span>I love creating amazing robust features!</span>{" "}
          </p>
          <button type="button" className="btn btn-danger mb-3">
            <i class="fa fa-download ml-3"></i>{" "}
            <a
              className="text-decoration-none text-light"
              href="https://drive.google.com/file/d/1I-pXAuCC2AfeZ3HLogdUetkaeFq5FcMA/view?usp=drivesdk"
            >
              Download my Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
