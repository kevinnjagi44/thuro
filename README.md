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

<!-- ![Torino Login Modal](https://github.com/fsiino/torino/blob/master/app/assets/images/readme/readme-login.png?raw=true  -->

<img src="https://github.com/fsiino/torino/blob/master/app/assets/images/readme/readme-login.png?raw=true" alt="Login Modal" width=50%>

### Car Creation
Car owners can post their cars for rent, selecting optional features such as heated seats, GPS, or bluetooth. Mandatory fields such as transmission are also included for potential renter decision-making.

###


### Update & Deletion

In addition to creation, owners can make edits and delete their listings. Edit and delete options are displayed on the car show page <b>if</b> the current user is recognized as an owner. As an added security measure, any attempt to access another owner's car edit page URL forcefully redirects to the index.

```
TRANSMISSION_TYPE = %w(automatic manual none).freeze

  COLORS = %w(black brown gray silver white red orange yellow gold purple blue green).freeze

  validates :rate, :make, :model, :year, :color, :transmission, :seats, :description, :plate, :address, :city, :state, :zip, :doors, presence: true

  validates :awd, :audio_input, :bike_rack, :bluetooth, :child_seat, :convertible, :gps, :heated_seats, :longterm_car, :pet_friendly, :ski_rack, :snow_tires_chains, :sunroof, :toll_pass, :usb_input, inclusion: [true, false]

  validates :transmission, inclusion: TRANSMISSION_TYPE, unless: -> { transmission.blank? }

  belongs_to :user,
    foreign_key: :owner_id, 
    class_name: :User

  has_many :rentals,
    foreign_key: :car_id,
    class_name: :Rental

  has_many_attached :photos
  ```


## Future Releases:
* Car rentals and reviews
* Car image carousels
* Search
* User profiles
* Improve device responsiveness