import { configureStore } from '@reduxjs/toolkit';
import addFlightReducer from "./flight/AddFlightReducer";
import flightReducer from "./flight/FlightListReducer";


const store = configureStore({
    reducer: {
        flights: flightReducer,
        flight: addFlightReducer
    }
})