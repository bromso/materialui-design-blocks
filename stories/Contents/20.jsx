import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents20 = ({
  title,
  content,
  background,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block py-0">
    <div className="container py-5 my-5"
      {...background && { style: { backgroundImage: `url(${background})` } }}
    >
      <div className="row text-left py-5">
        <div className="col-12 col-sm-10 m-auto ml-md-5 col-md-8 col-lg-6">
          <div className="fdb-box">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-8 text-center">
                <h1>{title}</h1>
                <p className="lead">{content}</p>

                <p className="h3 mt-4">
                  <Link to={buttonUrl}>
                    {`${buttonTitle} `}
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
Contents20.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  background: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default Contents20;
