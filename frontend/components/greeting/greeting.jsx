import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const loggedOut = () => {
     
    return (
    <nav>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
    )};

  const loggedIn = () => {
     
    return (
    <nav>
      <h2>Hi, {currentUser.fname}.</h2>
      <h3>In case you didn't know, your last name is {currentUser.lname}.</h3>
      <button onClick={logout}>Log Out</button>
    </nav>  
  )};

  // if (currentUser) {
  //   return loggedIn();
  // } else {
  //   return loggedOut();
  // };

  return currentUser ? loggedIn() : loggedOut();

};

export default Greeting;