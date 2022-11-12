// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchFlights } from '../redux/flight/FlightListReducer';
// // import Flight from './Flight';

// const Home = () => {
//   // const flightList = useSelector((state) => state.flights.flights.data);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchFlights());
//   }, [dispatch]);

//   return (
//     <section>
//       <div className="home-header">
//         <h4>Flight list:</h4>
//         <p>Please select to book a flight</p>
//       </div>
//       <div className="container">
//         <div className="flight">
//           {/* {(flightList) ? flightList.map((item) => (
//             <Flight
//               key={item.id}
//               id={item.id}
//               avatar={item.avatar}
//               name={item.name}
//               price={item.price}
//             />
//           )) : null } */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirlines } from '../redux/flights/flights';
import Flight from './Flight';

const Home = () => {
  const dataList = useSelector((state) => state.airlines.airlines.data);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchAirlines());
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
              image={item.image}
              airlineName={item.name}
              price={item.price}
            />
          )) : null }
        </div>
      </div>
    </section>
  );
};

export default Home;
