import React from 'react';
import GreetingContainer from './greeting/greeting_container';
// import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>TuroClone App</h1>
      <GreetingContainer/>
    </header>
    <AuthRoute path ="/login" component={LogInFormContainer} />
    <AuthRoute path ="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;  