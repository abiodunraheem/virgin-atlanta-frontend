import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationPanel from './components/NavigationPanel';
import Home from './components/Home';
import DeleteFlight from './components/DeleteFlight';
import Reservations from './components/Reservations';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddFlight from './components/AddFlight';
import AddReservation from './components/AddReservation';
import FlightDetails from './components/FlightDetails';

function App() {
  return (
    <div className="app">
      {(sessionStorage.getItem('loginToken')) ? <NavigationPanel /> : null }
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flight/:id" element={<FlightDetails />} />
        <Route path="/DeleteFlight" element={<DeleteFlight />} />
        <Route path="/AddFlight" element={<AddFlight />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/addReservation/:id" element={<AddReservation />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
