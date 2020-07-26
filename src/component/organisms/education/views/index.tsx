import * as React from "react";

const Education: React.FC = () => {
  return (
    <div className="section" id="education">
      <div className="container cc-education">
        <div className="h4 text-center mb-4 title">Education</div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body cc-education-header">
                <p>2016 - 2021</p>
                <div className="h5">Engineer's Degree</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body">
                <div className="h5">Engineer of Information Technology</div>
                <p className="category">
                  Post and Telecommunications Institute of Technology
                </p>
                <p>
                  Design, construction, installation and maintenance software
                  (focusing on software for digital electronic devices) of
                  digital electronic systems including communication systems,
                  computers and computer-based device systems.
                </p>
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
              <div className="card-body cc-education-header">
                <p>2009 - 2013</p>
                <div className="h5">IELTS certificate</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div className="card-body">
                <div className="h5">IELTS band 6.0</div>
                <p className="category">University of Cambridge</p>
                <p>
                  IELTS is an international standardised test of English
                  language proficiency for non-native English language speakers.
                  IELTS is one of the major English-language tests in the world,
                  others being the TOEFL, TOEIC, and so on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
