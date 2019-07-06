import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, signup, logout} from './actions/session_actions';
// import {fetchCars} from './util/car_api_util';
import {fetchCars} from './actions/car_actions';

document.addEventListener('DOMContentLoaded', () => {
	let store;
	if (window.currentUser) {
		const preloadedState = {
			session: { id: window.currentUser.id },
			entities: {
				users: { [window.currentUser.id]: window.currentUser }
				}
			};
			store = configureStore(preloadedState);
			delete window.currentUser;
	} else {
			store = configureStore();
	}
	
	//TESTING START
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.login = login;
	window.signup = signup;
	window.logout = logout;

	window.fetchCars = fetchCars;
	//TESTING END

	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
