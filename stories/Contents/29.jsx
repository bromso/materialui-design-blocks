import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents29 = ({
  title,
  content,
}) => (
  <section className="fdb-block">
    <div className="container">
      <div className="row text-center align-items-center">
        <div className="col-8 col-md-4">
          <img alt="image" className="img-fluid" src="./imgs/photos/map-1.jpg" />
        </div>
        <div className="col-4 col-md-2">
          <div className="row">
            <div className="col-12">
              <img alt="image" className="img-fluid" src="./imgs/photos/map-2.jpg" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <img alt="image" className="img-fluid" src="./imgs/photos/map-3.jpg" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 ml-auto pt-5 pt-md-0">
          <img alt="image" className="fdb-icon" src="./imgs/icons/github.svg" />
          <h1>{title}</h1>
          <p className="lead">{content}</p>
        </div>
      </div>
    </div>
  </section>
);
Contents29.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Contents29;
