import React from 'react';
// import { Link } from 'react-router-dom'; 

const Greeting = ({ currentUser, logout, openModal }) => {
  
  const loggedOut = () => {
    return (
    <nav>
      {/* <Link to="/login">Login</Link> */}
      <button className="navbutton" onClick={() => openModal('login')}>Login</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="navbutton" onClick={() => openModal('signup')}>Sign up</button>
      {/* <Link to="/signup">Sign up</Link> */}
    </nav>
    )};

  const loggedIn = () => {   
    return (
    <nav className="nav-item-wrapper">
      <div className="nav-profile" onClick={logout}/>
      {/* <h2>Hi, {currentUser.fname}.</h2> */}
        {/* <img src="https://github.com/fsiino/torino/blob/master/app/assets/images/profile-icon.png?raw=true" height='38px' onClick={logout} /> */}
      {/* <button onClick={logout}>Log Out</button> */}
    </nav>  
  )};

  if (currentUser) {
    return loggedIn();
  } else {
    return loggedOut();
  };

};

export default Greeting;