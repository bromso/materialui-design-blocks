import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents26 = ({
  title,
  content,
  background,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block">
    <div className="col-fill-left"
      {...background && { style: { backgroundImage: `url(${background})` } }}
    >
    </div>

    <div className="container">
      <div className="row justify-content-end">
        <div className="col-12 col-md-5 text-center">
          <h1>{title}</h1>
          <p className="lead">{content}</p>

          <p className="mt-4">
            <Link to={buttonUrl}>
              {`${buttonTitle} `}
              <i className="fas fa-angle-right"></i>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);
Contents26.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  background: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default Contents26;
