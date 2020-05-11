import React from 'react';
import Link from '@material-ui/core/Link';

const Contents32 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h1>Froala Design Blocks</h1>
          <p className="h2"><em>Right at the coast of the Semantics, a large language ocean.</em></p>
        </div>
      </div>

      <div className="row text-center pt-3 pt-xl-5">
        <div className="col-12 col-sm-10 m-auto m-md-0 col-md-6">
          <img alt="image" height="300" src="./imgs/draws/tenis.svg" />
          <p className="lead pt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>

        <div className="col-12 col-sm-10 m-auto m-md-0 col-md-6 pt-5 pt-md-0">
          <img alt="image" height="300" src="./imgs/draws/basketball.svg" />
          <p className="lead pt-3">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contents32;
