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


<!-- # Torino -->
![Torino](https://github.com/fsiino/torino/blob/master/app/assets/images/readme/torino-logo.png?raw=true)

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

### Libraries
* React Dates

## Features:

### Splash Page

![Torino Splash Page](https://github.com/fsiino/torino/blob/master/app/assets/images/readme/readme-mbp.png?raw=true)

### User Authentication

Users are required to sign up in order to create cars and book rentals. User credentials are stored as a password digest after being hashed and salted:

 ```ruby
 class User < ApplicationRecord
    validates :fname, :lname, presence: true
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    ...

    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
```
 
 An automated demo login button can be found on the login modal for quicker access to the UX.

<img src="https://github.com/fsiino/torino/blob/master/app/assets/images/readme/readme-login.png?raw=true" alt="Login Modal" width=30%>

### Car Create, Update, & Delete
Car owners can post their cars for rent, selecting optional features such as heated seats, GPS, or bluetooth. Mandatory fields such as transmission are also included for potential renter decision-making.

In addition to creation, owners can make edits and delete their listings. Edit and delete options are displayed on the car show page <b>if</b> the current user is recognized as an owner. As an added security measure, any attempt to access another owner's car edit page URL forcefully redirects to the index:

```js
render() {

...  

    if (this.props.car.owner_id === this.props.currentUserId) {
      showEditDel = 
      <>
        <Link to={`/cars/${this.props.car.id}/edit`}>
          <button>Edit this car</button>
        </Link>
        <br />
        <button onClick={this.handleDelete}>Delete this car</button>
      </>
    }
```
<img src="https://github.com/fsiino/torino/blob/master/app/assets/images/readme/readme-car-edit.gif?raw=true" alt="Torino car edit demo"/>

### Rentals
Once a potential customer finds a car they like, a rental can be booked on the right side of the car show page. After accepting the confirmation dialog, a new ```<div>``` will appear in the same pane giving the user the option to navigate to their rentals page for review.

<!-- ![User Rentals Page](https://github.com/fsiino/torino/blob/master/app/assets/images/readme/readme-rentals.png?raw=true) -->
<img src="https://github.com/fsiino/torino/blob/master/app/assets/images/readme/readme-booking-demo-gif.gif?raw=true" alt="Torino booking demo"/>

```ruby
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

has many :reviews,
  foreign_key: :car_id,
  class_name: :Review

has_many_attached :photos
  ```

## Future Releases:
* Reviews
* Image Carousels
* Search
* User Dashboards
* Add to Favorites
* Mobile device responsiveness