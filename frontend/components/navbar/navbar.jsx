import React from 'react';
import { Link } from 'react-router-dom'; 
import NotificationsContainer from '../notifications/notifications_container';

const NavBar = ({ currentUser, logout, openModal }) => {
  
  const loggedOut = () => {
    return (
    <nav>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="navbutton" onClick={() => openModal('login')}>List your car</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="navbutton" onClick={() => openModal('login')}>Login</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="navbutton" onClick={() => openModal('signup')}>Sign up</button>
    </nav>
    )};

  const loggedIn = () => {   
    return (
      <div>
        <NotificationsContainer/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/cars/new">
          <button className="navbutton">List your car</button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <div className="dropdown">
          <div className="nav-profile"/>
          <div className="dropdown-content">
            <a className="dropdown-user">{currentUser.fname} {currentUser.lname}</a> 
            <Link to="/rentals">
              Your Rentals
            </Link>
            <Link to="/trips">
              Past Trips
            </Link>
            <a onClick={logout}>Log out</a>
          </div>
        </div>
      </div>
  )};

  if (currentUser) {
    return loggedIn();
  } else {
    return loggedOut();
  };

};

export default NavBar;

