import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; import baseURL from '../api';

const initialState = {
  flights: [],
  error: '',
};

export const fetchFlights = createAsyncThunk('flight/fetchFlights', async () => {
  const res = await fetch(`${baseURL}/flights`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('loginToken')}`,
    },
  });
  const resJson = await res.json();
  return resJson;
});

export const addNewFlights = createAsyncThunk('flight/fetchNewFlights', async (newFlight) => {
  const res = fetch(`${baseURL}/flights`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('loginToken')}`,
    },
    body: JSON.stringify(newFlight),
  }).then((res) => res.json());
  return res;
});

export const deleteFlight = createAsyncThunk('flight/deleteFlight', async (id) => {
  const res = await fetch(`${baseURL}/flights/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('loginToken')}`,
    },
  });
  return res.json();
});

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.flights = action.payload;
    });

    builder.addCase(fetchFlights.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });

    builder.addCase(addNewFlights.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.flights = action.payload;
    });

    builder.addCase(addNewFlights.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.payload.error;
    });

    builder.addCase(deleteFlight.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.flights = action.payload;
    });

    builder.addCase(deleteFlight.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.payload.error;
    });
  },
});

const flightReducer = flightSlice.reducer;
export default flightReducer;
