import React from 'react';
import Link from '@material-ui/core/Link';

const Footers6 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <footer className="fdb-block footer-small bg-dark">
    <div className="container">
      <div className="row text-center align-items-center">
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="https://www.froala.com">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">Privacy Policy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">Terms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.froala.com">About</Link>
            </li>
          </ul>

          <p className="h5 mt-5">© 2013-2018 Froala</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footers6;
