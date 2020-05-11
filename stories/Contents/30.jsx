import React from 'react';
import Link from '@material-ui/core/Link';

const Contents30 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 col-lg-3">
          <img alt="image" className="img-fluid" src="./imgs/photos/fireworks-1.jpg" />
        </div>

        <div className="col-6 col-lg-3">
          <img alt="image" className="img-fluid" src="./imgs/photos/fireworks-2.jpg" />
        </div>

        <div className="col-12 col-lg-6 pt-3">
          <p className="lead text-left">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
          <p className="lead text-left">Right at the coast of the Semantics, a large language ocean. A small river named Duden. <Link to="https://www.froala.com">[Read More]</Link></p>
        </div>
      </div>
    </div>
  </section>
);

export default Contents30;
