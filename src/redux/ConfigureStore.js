// import { configureStore } from '@reduxjs/toolkit';
// import addFlightReducer from './flight/AddFlightReducer';
// import flightReducer from './flight/FlightListReducer';

// const store = configureStore({
//   reducer: {
//     flights: flightReducer,
//     flight: addFlightReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import registerReducer from './users/registerSlice';
import airlineReducer from './flights/flights';
import reservationReducer from './reservations/reservations';

const logger = createLogger();

const store = configureStore({
  reducer: {
    airlines: airlineReducer,
    userInfo: registerReducer,
    reservations: reservationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
