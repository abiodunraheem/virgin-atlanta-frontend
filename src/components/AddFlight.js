import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewFlights } from '../redux/flights/flights';

function AddFlight() {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const [flight, setFlight] = useState({
    name: '',
    price: '',
    avatar: '',
  });

  const handleNewFlight = (e) => {
    e.preventDefault(e);

    const newFlight = {
      flight: { ...flight },
    };

    dispach(addNewFlights(newFlight));

    if (!flight.name || !flight.avatar || !flight.price) {
      alert('Fill up the form!');
      return;
    }
    setTimeout(() => {
      navigate('/home');
    }, 1000);

    setFlight({
      name: '',
      price: '',
      avatar: '',
    });
  };

  return (
    <section className="add-flight container">
      <h2>Add New Flight</h2>
      <form onSubmit={handleNewFlight} className="form">
        <div className="mb-3">
          <label htmlFor="airline-name" className="form-label">
            Flight Name
            <input
              type="text"
              className="form-control"
              id="airline-name"
              value={flight.name}
              onChange={(e) => setFlight({ ...flight, name: e.target.value })}
              placeholder="Name"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Flight logo
            <input
              type="url"
              className="form-control"
              id="image"
              value={flight.avatar}
              onChange={(e) => setFlight({ ...flight, avatar: e.target.value })}
              placeholder="Image URL"
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
            <input
              className="form-control"
              type="number"
              id="price"
              value={flight.price}
              onChange={(e) => setFlight({ ...flight, price: e.target.value })}
              placeholder="Price"
            />
          </label>
        </div>
        <button className="btn book-btn" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddFlight;
