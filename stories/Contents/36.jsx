import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';


const Contents36 = ({
  title,
  subtitle,
  primaryHeadline,
  primaryContent,
  secondaryHeadline,
  secondaryContent,
  imageTitle,
  imageUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row text-left align-items-center">
        <div className="col-10 col-sm-6 m-auto m-lg-0 col-lg-4">
          <img alt={imageTitle} className="img-fluid" src={imageUrl} />
        </div>
        <div className="col-12 col-lg-7 offset-lg-1 pt-4 pt-lg-0">
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>

          <div className="row mt-5">
            <div className="col-12 col-sm-6">
              <h3><strong>{primaryHeadline}</strong></h3>
              <p className="lead">{primaryContent}</p>
            </div>

            <div className="col-12 col-sm-6 pt-3 pt-sm-0">
              <h3><strong>{secondaryHeadline}</strong></h3>
              <p className="lead">{secondaryContent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
Contents36.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  primaryHeadline: PropTypes.string,
  primaryContent: PropTypes.string,
  secondaryHeadline: PropTypes.string,
  secondaryContent: PropTypes.string,
};

export default Contents36;
