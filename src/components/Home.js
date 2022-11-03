import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlights } from '../redux/flight/FlightListReducer';
import Flight from './Flight';

const Home = () => {
  const flightList = useSelector((state) => state.flights.flights.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  return (
    <section>
      <div className="header">
        <h2>Flight list:</h2>
        <p>Select to book a flight</p>
      </div>
      <div className="container">
        <div className="flight">
          {(flightList) ? flightList.map((item) => (
            <Flight
              key={item.id}
              id={item.id}
              avatar={item.avatar}
              name={item.name}
              price={item.price}
            />
          )) : null }
        </div>
      </div>
    </section>
  );
};

export default Home;
