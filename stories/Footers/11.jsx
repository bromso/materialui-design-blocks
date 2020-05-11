import React from 'react';
import Link from '@material-ui/core/Link';

const Footers11 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <footer className="fdb-block footer-small">
    <div className="container">
      <div className="row text-center align-items-center">
        <div className="col-12 col-sm-6 col-md-4 text-sm-left">
          <img alt="image" src="./imgs/logo.png" height="40" />
        </div>

        <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center">
          © 2013-2018 Froala
        </div>

        <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
          <Link to="https://www.froala.com" className="mx-2"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
          <Link to="https://www.froala.com" className="mx-2"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
          <Link to="https://www.froala.com" className="mx-2"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
          <Link to="https://www.froala.com" className="mx-2"><i className="fab fa-pinterest" aria-hidden="true"></i></Link>
          <Link to="https://www.froala.com" className="mx-2"><i className="fab fa-google" aria-hidden="true"></i></Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footers11;
