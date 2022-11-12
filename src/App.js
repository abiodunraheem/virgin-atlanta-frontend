// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import NavigationPanel from './components/NavigationPanel';
// import Home from './components/Home';
// import DeleteFlight from './components/DeleteFlight';
// import Reservations from './components/Reservations';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import AddFlight from './components/AddFlight';
// import AddReservation from './components/AddReservation';
// import FlightDetails from './components/FlightDetails';
// // import Header from './components/Header';

// function App() {
//   return (
//     <div className="app">
//       <NavigationPanel />
//       {/* <Header /> */}
//       {(sessionStorage.getItem('loginToken')) ? <NavigationPanel /> : null }
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/flight/:id" element={<FlightDetails />} />
//         <Route path="/deleteFlight" element={<DeleteFlight />} />
//         <Route path="/addFlight" element={<AddFlight />} />
//         <Route path="/reservations" element={<Reservations />} />
//         <Route path="/addReservation/:id" element={<AddReservation />} />
//         <Route path="/signUp" element={<SignUp />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

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
// import Header from './components/Header';

// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import NavigationPanel from './Components/NavigationPanel';
// import Home from './Components/Home';
// import DeletedFlights from './Components/DeleteFlight';
// import Reservations from './Components/Reservations';
// import SignUp from './Components/SignUp';
// import Login from './Components/Login';
// import AirlineForm from './Components/AddFlight';
// import ReservationForm from './Components/AddReservation';
// import AirlineDetails from './Components/FlightDetails';

function App() {
  return (
    <div className="app">
      {(sessionStorage.getItem('loginToken')) ? <NavigationPanel /> : null }
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
