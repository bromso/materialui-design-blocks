import React from 'react';
import Link from '@material-ui/core/Link';

const Footers10 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <footer className="fdb-block footer-large bg-dark">
    <div className="container">
      <div className="row align-items-top text-center text-md-left">
        <div className="col-12 col-sm-6 col-md-4">
          <h3><strong>Country A</strong></h3>
          <p>Street Address 52<br />Contact Name</p>
          <p>+44 827 312 5002</p>
          <p><Link to="https://www.froala.com">countrya@amazing.com</Link></p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">
          <h3><strong>Country B</strong></h3>
          <p>Street Address 100<br />Contact Name</p>
          <p>+13 827 312 5002</p>
          <p><Link to="https://www.froala.com">countryb@amazing.com</Link></p>
        </div>

        <div className="col-12 col-md-4 mt-5 mt-md-0 text-md-left">
          <h3><strong>About Us</strong></h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          © 2018 Froala. All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footers10;
