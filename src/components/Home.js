import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../redux/flights/flights';
import Flight from './Flight';

const Home = () => {
  const dataList = useSelector((state) => state.flights.flights.data);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchFlights());
  }, [dispach]);

  return (
    <section className="main">
      <div className="header">
        <h2>Welcome To Virgin Atlanta...</h2>
        <p>Your confort... Our passion!!!</p>
        <p>Please select to book a flight from the list</p>
      </div>
      <div className="container">
        <div className="flights">
          {(dataList) ? dataList.map((item) => (
            <Flight
              key={item.id}
              id={item.id}
              avatar={item.avatar}
              flightName={item.name}
              price={item.price}
            />
          )) : null }
        </div>
      </div>
    </section>
  );
};

export default Home;
