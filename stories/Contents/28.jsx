import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const Contents28 = ({
  content,
}) => (
  <section className="fdb-block bg-dark">
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h1>Made with <i className="fas fa-heart text-danger"></i> by Froala</h1>
        </div>
      </div>
    </div>
  </section>
);
Contents28.propTypes = {
  content: PropTypes.string,
};

export default Contents28;
