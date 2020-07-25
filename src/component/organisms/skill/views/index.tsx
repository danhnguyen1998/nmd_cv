import * as React from "react";

const About: React.FC = () => {
  return (
    <div className="section" id="skill">
      <div className="container">
        <div className="h4 text-center mb-4 title">Professional Skills</div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">React Native</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    ></div>
                    <span className="progress-value">80%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">ReactJS</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "70%" }}
                    ></div>
                    <span className="progress-value">70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">NodeJS</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    ></div>
                    <span className="progress-value">60%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">Javascript</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "70%" }}
                    ></div>
                    <span className="progress-value">70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">MySQL</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "50%" }}
                    ></div>
                    <span className="progress-value">50%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">HTML & CSS</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "50%" }}
                    ></div>
                    <span className="progress-value">50%</span>
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

export default About;
