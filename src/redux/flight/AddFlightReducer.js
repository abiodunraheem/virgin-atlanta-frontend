// import axios from 'axios';

// const CREATE_FLIGHT = 'VIRGIN-ATLANTA-FRONTEND/CREATE_FLIGHT';

// const createFlight = (payload) => ({
//   type: CREATE_FLIGHT,
//   payload,
// });

// export const addFlight = (payload) => async (dispatch) => {
//   axios.post('http://127.0.0.1:3000/api/v1/flights/', payload)
//     .then((res) => {
//       dispatch(createFlight(res.data));
//     })
//     .catch((error) => {
//       dispatch(createFlight(error.response.data));
//     });
// };

// const flightState = [];
// const addFlightReducer = (state = flightState, action) => {
//   switch (action.type) {
//     case CREATE_FLIGHT:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default addFlightReducer;
