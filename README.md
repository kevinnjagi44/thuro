<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->


# Torino
Torino is a full stack web application inspired by Turo, a peer-to-peer carsharing company.

[Live Link](https://torino-fsp.herokuapp.com/#/)

## Technologies:

### Backend
* Ruby on Rails
* PostgreSQL
* AWS

### Frontend
* React
* Redux
* Javascript

### APIs
* Google Maps
* React Dates (coming soon)

## Features:

### Splash Page

![Torino Splash Page](https://github.com/fsiino/torino/blob/master/app/assets/images/readme/readme-splash.png?raw=true)

### User Authentication

Users are required to sign up in order to post. An automated demo login button can be found on the login modal for quicker access to the UX.

### Car Creation
Car owners can post their cars for rent, selecting optional features such as heated seats, GPS, or bluetooth. Mandatory fields such as transmission are also included for potential renter decision-making.

###

### Update & Deletion

In addition to creation, owners can make edits and delete their listings. Edit and delete options are displayed on the car show page <b>if</b> the current user is recognized as an owner. As an added security measure, any attempt to access another owner's car edit page URL forcefully redirects to the index.

## Future Releases:
* Car rentals and reviews
* Car image carousels
* Search
* User profiles
* Improve device responsiveness

