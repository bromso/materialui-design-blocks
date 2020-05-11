import React from 'react';
import Link from '@material-ui/core/Link';

const Contents19 = ({
  title,
  content,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row text-left">
        <div className="col-12 col-md-6">
          <img alt="image" className="fdb-icon" src="./imgs/icons/gift.svg" />
          <h3><strong>Awesome Things</strong></h3>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far from the countries Vokalia and Consonantia.</p>
        </div>
        <div className="col-12 col-md-6 pt-5 pt-md-0">
          <img alt="image" className="fdb-icon" src="./imgs/icons/cloud.svg" />
          <h3><strong>More Awesomeness</strong></h3>
          <p className="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries <Link to="https://www.froala.com">Vokalia and Consonantia</Link>, there live the blind texts. </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contents19;
