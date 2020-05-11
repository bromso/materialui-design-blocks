import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents25 = ({
  title,
  imageTitle,
  imageUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row justify-content-center pb-5">
            <div className="col-12 col-lg-8 text-center">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <img alt={imageTitle} className="img-fluid" src={imageUrl} />
        </div>
      </div>
    </div>
  </section>
);
Contents25.propTypes = {
  title: PropTypes.string,
  imageTitle: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Contents25;
