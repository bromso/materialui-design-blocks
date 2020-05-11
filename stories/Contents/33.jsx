import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents33 = ({
  title,
  content,
  background,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block py-0">
    <div className="container pt-5 mt-5"
      {...background && { style: { backgroundImage: `url(${background})` } }}
    >
      <div className="row text-left pt-5">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="fdb-box fdb-touch rounded-bottom-0">
            <h2><strong>{title}</strong></h2>
            <p className="lead">{content}</p>
            <p className="lead mt-4">
              <Link to={buttonUrl}>{buttonTitle}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
Contents33.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  background: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default Contents33;
