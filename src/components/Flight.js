import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Flight = ({
  id, avatar, flightName, price,
}) => (
  <div className="card mb-3 details-container">
    <Link key={id} to={`/airline/${id}`} className="link">
      <div className="img-container">
        <img src={avatar} alt={flightName} />
      </div>
      <div className="cancelled-flights contents">
        <h3>{flightName}</h3>
        {' '}
        ................
        <h4>
          Price: $
          {price}
        </h4>
      </div>
    </Link>
  </div>
);

Flight.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  flightName: PropTypes.string,
  price: PropTypes.number,
};

Flight.defaultProps = {
  id: null,
  avatar: null,
  flightName: null,
  price: null,
};

export default Flight;
