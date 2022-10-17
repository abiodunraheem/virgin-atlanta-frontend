import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchFlights = createAsyncThunk('fetchFlights', async()=> {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/flights/');
    const flights = await response.data;
    return flights;
});

const flightSlice = createSlice({
    name: 'flights',
    initialState: {
        flight: '',
        loading: false,
        error: false
    },
    reducer: {},
    extraReducer: {
        [fetchFlights.fulfilled]: (state, action) => {
            const newState = {
                ...state,
                flight: action.payload
            }
            return newState;
        }
    }
});

const flightReducer = flightSlice.reducer;
export default flightReducer;
