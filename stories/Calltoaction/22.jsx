import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents22 = ({
  title,
  content,
  caption,
  buttonTitle,
  buttonUrl,
  imageTitle,
  imageUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xl-6 text-center">
          <img alt={imageTitle} width="200" src={imageUrl} />
          <h1>{title}</h1>
          <p className="lead">{content}</p>

          <p className="h3 mt-5">
            <Link to={buttonUrl} className="btn btn-primary">{buttonTitle}</Link>
          </p>
          <p>{caption}</p>
        </div>
      </div>
    </div>
  </section>
);
Contents22.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default Contents22;
