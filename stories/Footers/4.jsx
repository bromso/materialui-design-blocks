import React from 'react';
import Link from '@material-ui/core/Link';

const Footers4 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <footer className="fdb-block footer-small">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-12 col-lg-4 text-lg-left">
          © 2018 Froala
        </div>

        <div className="col-12 col-lg-4 mt-4 mt-lg-0">
          <img alt="image" src="./imgs/logo.png" height="40" />
        </div>

        <div className="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0">
          <ul className="nav justify-content-lg-end justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">Privacy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">Terms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footers4;
