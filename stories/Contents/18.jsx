import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents18 = ({
  title,
  subtitle,
  content,
  buttonTitle,
  buttonUrl,
  imageTitle,
  imageUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-12 col-lg-6 col-xl-5">
          <h1>{title}</h1>
          <p className="lead mb-5">{subtitle}</p>

          <p><strong>{content}</strong></p>
          <p className="h1 text-muted">
            <i className="fab fa-chrome mr-3"></i>
            <i className="fab fa-safari mr-3"></i>
            <i className="fab fa-firefox mr-3"></i>
            <i className="fab fa-edge"></i>
          </p>
        </div>
        <div className="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
          <img alt={imageTitle} className="img-fluid" src={imageUrl} />
        </div>
      </div>
    </div>
  </section>
);
Contents18.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  background: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
  imageTitle: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Contents18;
