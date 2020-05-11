import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents24 = ({
  title,
  content,
  imageTitle,
  imageUrl,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-7 col-lg-5 ml-md-auto">
          <h1>{title}</h1>
          <p className="lead">{content}</p>

          <p className="mt-5">
            <img alt="image" height="25" className="mr-4" src="./imgs/customers/samsung.svg" />
            <img alt="image" height="25" className="mr-4" src="./imgs/customers/adobe.svg" />
            <img alt="image" height="25" src="./imgs/customers/amazon.svg" />
          </p>
        </div>

        <div className="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pt-5 pt-md-0">
          <img alt={imageTitle} className="img-fluid rounded-0" src={imageUrl} />
        </div>
      </div>
    </div>
  </section>
);
Contents24.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageTitle: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Contents24;
