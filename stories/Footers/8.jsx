import React from 'react';
import Link from '@material-ui/core/Link';

const Footers8 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <footer className="fdb-block footer-small">
    <div className="container">
      <div className="row text-center align-items-center">
        <div className="col-12 col-md-8">
          <ul className="nav justify-content-center justify-content-md-start align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="https://www.froala.com">
                  <img alt="image" src="./imgs/logo.png" height="40" />
                </Link>
            </li>
            <li className="w-100 d-block d-sm-none"></li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">Terms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">About</Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 mt-4 mt-md-0 text-md-right">
          © 2013-2018 Froala
        </div>
      </div>
    </div>
  </footer>
);

export default Footers8;
