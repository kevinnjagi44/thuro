import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, signup, logout} from './actions/session_actions';
import {fetchCars, fetchCar, editCar, createCar, deleteCar} from './actions/car_actions';
import {fetchRentals, fetchRental, editRental, createRental, deleteRental} from './actions/rental_actions';
import {fetchReviews, fetchReview, editReview, createReview, deleteReview} from './actions/review_actions';

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

	// let http = require("http");
	// setInterval(function () {
	// 	http.get("http://thuro.herokuapp.com");
	// }, 300000); // every 5 minutes (300000)
	
	//TESTING START
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	/* users */
	window.login = login;
	window.signup = signup;
	window.logout = logout;
	/* cars */
	window.fetchCars = fetchCars;
	window.fetchCar = fetchCar;
	window.editCar = editCar;
	window.createCar = createCar;
	window.deleteCar = deleteCar;
	/* rentals */
	window.fetchRentals = fetchRentals;
	window.fetchRental = fetchRental;
	window.editRental = editRental;
	window.createRental = createRental;
	window.deleteRental = deleteRental;
	/* reviews */
	window.fetchReviews = fetchReviews;
	window.fetchReview = fetchReview;
	window.editReview = editReview;
	window.createReview = createReview;
	window.deleteReview = deleteReview;
	//TESTING END
	
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
