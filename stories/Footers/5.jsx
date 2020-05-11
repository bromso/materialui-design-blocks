import React from 'react';
import Link from '@material-ui/core/Link';

const Footers5 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <footer className="fdb-block footer-small bg-dark">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-8">
          <ul className="nav justify-content-center justify-content-md-start">
            <li className="nav-item">
              <Link className="nav-link active" to="https://www.froala.com">Home</Link>
            </li>
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

        <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
          © 2018 Froala. All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footers5;
