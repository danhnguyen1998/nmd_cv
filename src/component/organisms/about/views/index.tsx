import * as React from "react";

const About: React.FC = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About</div>
                <p>
                  Hello! I am Nguyen Minh Danh. Web Developer, React Native
                  Developer
                </p>
                <p>
                  I desire to take advantages of coding skills & experience and get a deeper
                  understanding of software engineering to become a professional
                  developer and bring a lot of value to customers and companies.
                  From that, I will contribute as much as possible to
                  development of my company.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Basic Information</div>
                <div className="row">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Birthday:</strong>
                  </div>
                  <div className="col-sm-8">Jun 04, 1998</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Email:</strong>
                  </div>
                  <div className="col-sm-8">danhnguyen1998@gmail.com</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Phone:</strong>
                  </div>
                  <div className="col-sm-8">+84 378 562 020</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Address:</strong>
                  </div>
                  <div className="col-sm-8">
                    Thanh Binh Street, Mo Lao, Ha Dong District, Hanoi
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Language:</strong>
                  </div>
                  <div className="col-sm-8">Vietnamese, English</div>
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
