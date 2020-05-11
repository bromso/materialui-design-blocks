import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents23 = ({
  title,
  content,
  primaryImageTitle,
  primaryImageUrl,
  secondaryImageTitle,
  secondaryImageUrl,
  primaryButtonTitle,
  primaryButtonUrl,
  secondaryButtonTitle,
  secondaryButtonUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pb-5 pb-md-0">
          <img alt={primaryImageTitle} className="img-fluid rounded-0" src={primaryImageUrl} />
        </div>

        <div className="col-12 ml-md-auto col-md-7 col-lg-6 pb-5 pb-md-0">
          <img alt={secondaryImageTitle} className="fdb-icon" src={secondaryImageUrl} />
          <h1>{title}</h1>
          <p className="lead">{content}</p>
          <p className="mt-4">
            <Link className="btn btn-secondary" to={primaryButtonUrl}>{primaryButtonTitle}</Link>
            <Link className="btn btn-dark ml-3" to={secondaryButtonUrl}>{secondaryButtonTitle}</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);
Contents23.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  primaryImageTitle: PropTypes.string,
  primaryImageUrl: PropTypes.string,
  secondaryImageTitle: PropTypes.string,
  secondaryImageUrl: PropTypes.string,
  primaryButtonTitle: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryButtonTitle: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
};

export default Contents23;
