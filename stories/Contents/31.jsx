import React from 'react';
import Link from '@material-ui/core/Link';

const Contents31 = ({
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row text-left align-items-center">
        <div className="col-12 col-md-6 col-lg-4">
          <h2>Your Website</h2>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <p className="lead"><Link to="https://www.froala.com">Read More</Link></p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 pt-4 pt-md-0">
          <h2>Amazing Design</h2>
          <p className="lead">Right at the coast of the Semantics, a large language ocean. A small river named Dude a rge language ocean there live the blind.</p>
          <p className="lead"><Link to="https://www.froala.com">Read More</Link></p>
        </div>

        <div className="col-12 col-md-8 m-auto m-lg-0 col-lg-4 pt-5 pt-lg-0">
          <img alt="image" className="img-fluid" src="./imgs/draws/tabs.svg" />
        </div>
      </div>
    </div>
  </section>
);

export default Contents31;
