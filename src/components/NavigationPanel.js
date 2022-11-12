// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoMdClose } from 'react-icons/io';
// import { FaBars } from 'react-icons/fa';

// const NavigationPanel = () => {
//   const [NavIsActive, toggleActiveNav] = useState(false);
//   const isActive = true;

//   const handleSignOut = () => {
//     sessionStorage.removeItem('loginToken');
//     window.reload();
//   };
//   return (
//     <aside className={NavIsActive ? 'nav-panel hidden' : 'nav-panel'}>
//       <button
//         type="button"
//         className="mobile-toggle btn"
//         onClick={() => {
//           toggleActiveNav(!NavIsActive);
//         }}
//       >
//         {NavIsActive ? (
//           <FaBars />

//         ) : (
//           <IoMdClose />
//         )}
//       </button>
//       <div className="header__logo">
//         <Link to="/home">
//           {' '}
//           {/* <img src={logo} alt="logo" /> */}
//         </Link>
//       </div>
//       <ul className="panel-links">
//         <li className={isActive ? 'active-link' : ''}>
//           <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/home">Home</Link>
//         </li>
//         <li className={isActive ? 'active-link' : ''}>
//           <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/addFlight">Add Flight</Link>
//         </li>
//         <li className={isActive ? 'active-link' : ''}>
// eslint-disable-next-line max-len
//           <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/deleteFlight">Delete Flight</Link>
//         </li>
//         <li className={isActive ? 'active-link' : ''}>
//           {' '}
// eslint-disable-next-line max-len
//           <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/reservations">Reservations</Link>
//         </li>
//         <li className={isActive ? 'active-link' : ''}>
//           {' '}
//           <Link onClick={handleSignOut} to="/login">Sign Out</Link>
//         </li>
//       </ul>
//       <ul className="social-links">
//         <li>
//           <span>
//             <i className="fa-brands fa-linkedin-in" />
//           </span>
//         </li>
//         <li>
//           <span>
//             <i className="fa-brands fa-facebook" />
//           </span>
//         </li>
//         <li>
//           <span>
//             <i className="fa-brands fa-twitter" />
//           </span>
//         </li>
//         <li>
//           <span>
//             <i className="fa-brands fa-whatsapp" />
//           </span>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default NavigationPanel;

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';

// import logo from '../logo.png';

function NavigationPanel() {
  const [NavIsActive, toggleActiveNav] = useState(false);
  const isActive = true;

  const handleSignOut = () => {
    sessionStorage.removeItem('loginToken');
    window.reload();
  };

  return (
    <>
      <aside className={NavIsActive ? 'nav-panel hidden' : 'nav-panel'}>
        <button
          type="button"
          className="mobile-toggle btn"
          onClick={() => {
            toggleActiveNav(!NavIsActive);
          }}
        >
          {NavIsActive ? (
            <FaBars />

          ) : (
            <IoMdClose />
          )}
        </button>

        <div className="header__logo">
          <Link to="/home">
            {' '}
            {/* <img src={logo} alt="logo" /> */}
          </Link>
        </div>

        <ul className="panel-links">
          <li className={isActive ? 'active-link' : ''}>
            <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/home">Home</Link>
          </li>
          <li className={isActive ? 'active-link' : ''}>
            <Link
              onClick={() => toggleActiveNav(!NavIsActive)}
              to="/addFlight"
            >
              Add Flight
            </Link>
          </li>
          <li className={isActive ? 'active-link' : ''}>
            <Link
              onClick={() => toggleActiveNav(!NavIsActive)}
              to="/deleteFlight"
            >
              Delete Flight
            </Link>
          </li>

          <li className={isActive ? 'active-link' : ''}>
            {' '}
            <Link
              onClick={() => toggleActiveNav(!NavIsActive)}
              to="/reservations"
            >
              Reservations
            </Link>
          </li>

          <li className={isActive ? 'active-link' : ''}>
            {' '}
            <Link onClick={handleSignOut} to="/">
              SignOut
            </Link>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <span>
              <i className="fa-brands fa-linkedin-in" />
            </span>
          </li>
          <li>
            <span>
              <i className="fa-brands fa-facebook" />
            </span>
          </li>
          <li>
            <span>
              <i className="fa-brands fa-twitter" />
            </span>
          </li>
          <li>
            <span>
              <i className="fa-brands fa-whatsapp" />
            </span>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default NavigationPanel;
