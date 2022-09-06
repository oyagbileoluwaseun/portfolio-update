import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Career.css";

const Career = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid" id="career">
      <section id="resume" className="grey-section">
        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2 className="fw-bolder">Work Experience</h2>
          </div>{" "}
          {/* /resume-header */}
          <div className="col-twelve">
            <div className="timeline-wrap">
              <div data-aos="fade-up" className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="timeline-header">
                  <h3 className="text-dark">SurveyPlus Limited</h3>
                  <p className="text-secondary">May 2021 - May 2022</p>
                </div>
                <div className="timeline-content">
                  <h4 className="text-dark">Software Engineer</h4>

                  <div className="accordion col" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <h6 className="fw-bold">Job Description </h6>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            I helped develop the company's website application
                            using ReactJs,{" "}
                          </strong>
                          along with implementing new operational and service
                          enhancements, I also participate in the management of
                          the company' websites. I use JavaScript to maintain
                          the company's website app and online administrative
                          application. In order to ensure that business
                          operations go well.{" "}
                          <code>
                            I also assist with IT support in the company to
                            guarantee that business activities run smoothly.
                          </code>
                          <br />
                          <i>
                            <a
                              href="https://getsurveyplus.com/"
                              className="text-decoration-none text-danger"
                            >
                              Website
                            </a>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* /timeline-block */}
              {/* /timeline-block */}
              <div data-aos="fade-up" className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="timeline-header">
                  <h3 className="text-dark">Evend eCommerce</h3>
                  <p className="text-secondary">May 2020 - December 2020</p>
                </div>
                <div className="timeline-content">
                  <h4 className="text-dark">Software Engineer</h4>

                  <div className="accordion col" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          <h6 className="fw-bold">Job Description </h6>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            I assisted with the creation of the company website
                            from the start to the end using ReactJs,{" "}
                          </strong>
                          a JavaScript framework that provides component
                          reusability and rapid interaction with the virtual
                          DOM. I assist with the maintenance of the company's
                          websites and the implementation of new upgrades.{" "}
                          <code>
                            I also assist with the monitoring of the website's
                            payment section,
                          </code>
                          which employs Stripe as a payment gateway and
                          CommerceJS for product backend and maintenance. I
                          periodically enhance the company's website's mobile
                          responsiveness, especially when there is a new update.
                          <br />
                          <i>
                            <a
                              href="https://ng.linkedin.com/in/evend-ecommerce-1300b4202"
                              className="text-decoration-none text-danger"
                            >
                              Website
                            </a>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* /timeline-block */}
            </div>{" "}
            {/* /timeline-wrap */}
          </div>{" "}
          {/* /col-twelve */}
        </div>{" "}
        {/* /resume-timeline */}
      </section>
    </div>
  );
};

export default Career;
