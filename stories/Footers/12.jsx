import React from 'react';
import Link from '@material-ui/core/Link';

const Footers12 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <footer className="fdb-block footer-small">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
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

        <div className="col mt-4 mt-md-0 text-center text-md-right">
          <Link to="https://www.froala.com" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footers12;
