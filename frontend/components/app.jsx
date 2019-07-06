import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { Link, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import Main from './main/main';
import CarIndexContainer from './cars/car_index_container';

const App = () => (
  <div>
    <Modal/>
    <header className="navbar"> 
        <Link to="/">
          <img className="navlogo" alt="logo" src="https://github.com/fsiino/torino/blob/master/app/assets/images/torino-logo.png?raw=true"/>
        </Link>
      <GreetingContainer/>
    </header>

    <Switch>
      <AuthRoute path ="/login" component={LogInFormContainer} />
      <AuthRoute path ="/signup" component={SignUpFormContainer} />
      <Route exact path="/cars" component={CarIndexContainer} />
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;  