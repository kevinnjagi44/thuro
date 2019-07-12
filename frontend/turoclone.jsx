import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, signup, logout} from './actions/session_actions';
import {fetchCars, fetchCar, editCar, createCar, deleteCar} from './actions/car_actions';

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

	let http = require("http");
	
	setInterval(function () {
		http.get("http://torino-fsp.herokuapp.com");
	}, 300000); // every 5 minutes (300000)
	
	//TESTING START
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.login = login;
	window.signup = signup;
	window.logout = logout;
	window.fetchCars = fetchCars;
	window.fetchCar = fetchCar;
	window.editCar = editCar;
	window.createCar = createCar;
	window.deleteCar = deleteCar;

	//TESTING END
	// :)
	// console.log("LinkedIn: https://linkedin.com/in/fsiino/");
	// console.log("GitHub: https://github.com/fsiino/");
	
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
