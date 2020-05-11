import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents27 = ({
  title,
  content,
  background,
  caption,
  buttonTitle,
  buttonUrl,
}) => (
  <section className="fdb-block">
    <div className="col-fill-right"
      {...background && { style: { backgroundImage: `url(${background})` } }}
    >
    </div>

    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-5 text-center">
          <h1>{title}</h1>
          <p className="lead">{content}</p>
          <p className="mt-4 mb-5">
            <Link className="btn btn-secondary" to={buttonUrl}>{buttonTitle}</Link>
          </p>

          <p>{caption}</p>
          <p>
            <Link to="https://www.froala.com" className="mx-2 text-secondary"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
            <Link to="https://www.froala.com" className="mx-2 text-secondary"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
            <Link to="https://www.froala.com" className="mx-2 text-secondary"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
            <Link to="https://www.froala.com" className="mx-2 text-secondary"><i className="fab fa-pinterest" aria-hidden="true"></i></Link>
            <Link to="https://www.froala.com" className="mx-2 text-secondary"><i className="fab fa-google" aria-hidden="true"></i></Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);
Contents27.propTypes = {  
  title: PropTypes.string,
  content: PropTypes.string,
  caption: PropTypes.string,
  background: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default Contents27;
