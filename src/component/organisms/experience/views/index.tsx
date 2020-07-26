import * as React from "react";

const Experience: React.FC = () => {
  return (
    <div className="section" id="experience">
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body cc-experience-header">
                <p>Jun 2020 - Present</p>
                <div className="h5">Bitwage</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body">
                <div className="h5">Front End Developer</div>
                <p>Implement UI code from template drawn by the design team</p>
                <p>Workwith RESTful API</p>
                <p>Technologies used: ReactJS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body cc-experience-header">
                <p>Mar 2020 - Present</p>
                <div className="h5">Accountabuilder</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body">
                <div className="h5">FE & BE Developer</div>
                <p>
                  Implement UI code from template designed by the design team
                </p>
                <p>Workwith RESTful API</p>
                <p>Write RESTful API</p>
                <p>Implement logical functions</p>
                <p>Technologies used: React Native, Nodejs, MySQL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body cc-experience-header">
                <p>Aug 2019 - Mar 2020</p>
                <div className="h5">Faheem</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body">
                <div className="h5">React Native Developer</div>
                <p>
                  Implement UI code from template designed by the design team
                </p>
                <p>Workwith RESTful API</p>
                <p>Implement logical functions</p>
                <p>Technologies used: React Native</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body cc-experience-header">
                <p>Aug 2019 - Mar 2020</p>
                <div className="h5">STEM Test</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body">
                <div className="h5">Intern</div>
                <p>Custom template</p>
                <p>Implement code for small modules</p>
                <p>Technologies used: PHP, MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
