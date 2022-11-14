import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFlights, deleteFlight } from '../redux/flights/flights';

const DeleteFlights = () => {
  const dataList = useSelector((state) => state.flights.flights.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataList) dispatch(fetchFlights());
  });

  const handleClick = (id) => {
    dispatch(deleteFlight(id));
  };

  return (
    <section className="add-flight container ">
      <div className="header">
        <h2>Do you want to cancel your flight?</h2>
        <p>Please pick a flight from the following list:</p>
      </div>
      <div className="">
        <div className="flights">
          {dataList ? dataList.map((item) => (
            <div className="mb-3 details-container " key={item.id}>
              <Link to={`/airline/${item.id}`} className="link">
                <div className="img-container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cancelled-flights">
                  <h3>{item.name}</h3>
                  {' '}
                  ................
                  <h4>
                    Price: $
                    {item.price}
                  </h4>
                </div>
              </Link>
              <button
                className="btn btn-warning"
                type="button"
                onClick={() => handleClick(item.id)}
              >
                Delete
              </button>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
};

export default DeleteFlights;
