import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents35 = ({
  title,
  content,
  background,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block pb-0"
    {...background && { style: { backgroundImage: `url(${background})` } }}
  >
    <div className="container">
      <div className="row text-left justify-content-end">
        <div className="col-12 col-md-6 col-xl-5">
          <div className="fdb-box rounded-bottom-0">
            <h2><strong>{title}</strong></h2>
            <p className="lead">{content}</p>

            <p className="lead mt-4">
              <Link className="btn btn-outline-primary" to={buttonUrl}>{buttonTitle}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
Contents35.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  background: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default Contents35;
