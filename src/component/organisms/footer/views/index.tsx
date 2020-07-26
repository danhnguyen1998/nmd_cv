import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a
          className="cc-github btn btn-link "
          href="https://github.com/danhnguyen1998"
          target="_blank"
        >
          <i className="fa fa-github fa-2x " aria-hidden="true"></i>
        </a>
        <a
          className="cc-facebook btn btn-link"
          href="https://www.facebook.com/dnt1998"
          target="_blank"
        >
          <i className="fa fa-facebook fa-2x " aria-hidden="true"></i>
        </a>
        <a
          className="cc-instagram btn btn-link"
          href="https://www.instagram.com/danhng0211/"
          target="_blank"
        >
          <i className="fa fa-instagram fa-2x " aria-hidden="true"></i>
        </a>
      </div>
      <div className="h4 title text-center">Danh Nguyen</div>
      <div className="text-center text-muted">
        <p>
          &copy; Danh Nguyen CV. All rights reserved.<br></br>Design -{" "}
          <a
            className="credit"
            href="https://www.facebook.com/dnt1998"
            target="_blank"
          >
            Danh Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
