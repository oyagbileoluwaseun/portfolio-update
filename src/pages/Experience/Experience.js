import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div className="container-fluid">
        <h2 className="text-center fw-bold m-3 text-dark">
          My Experience
          <i className="fa fa-certificate fa-2x" aria-hidden="true"></i>
        </h2>{" "}
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <i className="fa fa-building fa-2x" aria-hidden="true">
                <span className="fw-bold"> Company</span>
              </i>
            </div>
            <div className="col">
              <i className="fa fa-desktop fa-2x" aria-hidden="true">
                <span className="fw-bold"> Job Title</span>
              </i>
            </div>
            <div className="col">
              <i className="fa fa-address-card fa-2x" aria-hidden="true">
                <span className="fw-bold"> Job Description</span>
              </i>
            </div>
          </div>
          <hr />

          <div className="row mt-3 mb-3">
            <div className="col">
              <h5 className="pt-3">SurveyPlus Limited</h5>
            </div>
            <div className="col">
              <h5 className="pt-3">Software Engineer</h5>
            </div>

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
                    <h5>3rd / May / 2021 - 5th / May /2022 </h5>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong>
                    {"{"}" "{"}"}
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <div className="col">
              <h5 className="pt-3">SurveyPlus Limited</h5>
            </div>
            <div className="col">
              <h5 className="pt-3">Software Engineer</h5>
            </div>

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
                    <h5>3rd / May / 2021 - 5th / May /2022 </h5>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong>
                    {"{"}" "{"}"}
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
