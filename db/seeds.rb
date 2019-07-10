# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed Users
demo = User.create!(
  email: 'demo@email.com',
  password: 'password',
  fname: 'demo',
  lname: 'user'
)

frankie = User.create!(
  email: 'frankie@aa.io',
  password: 'password',
  fname: 'frankie',
  lname: 'siino'
)

steve = User.create!(
  email: 'steve@mi.com',
  password: 'password',
  fname: 'steve',
  lname: 'yee'
)

pop = User.create!(
  email: 'joe@se.com',
  password: 'password',
  fname: 'joe',
  lname: 'siino'
)

# Seed Cars
car1 = Car.create!(
  owner_id: frankie.id,
  rate: '110',
  make: 'Ford',
  model: 'Mustang', 
  year: 2012,
  color: 'black',
  transmission: 'manual',
  seats: '4',
  description: 'Fun ride. Ignore the stains in the back.',
  plate: '9DJ28H',
  address: '825 Battery St',
  city: 'San Francisco',
  state: 'CA',
  mpg: 24,
  zip: 94111,
  lat: 37.799017,
  lng: -122.401116
)

car2 = Car.create!(
  owner_id: steve.id,
  rate: '160',
  make: 'Lexus',
  model: 'IS350', 
  year: '1990',
  color: 'gray',
  transmission: 'automatic',
  seats: '5',
  description: 'Clean ride. Good fun.',
  plate: '6D8SA6S',
  address: '1200 39th Ave',
  city: 'San Francisco',
  state: 'CA',
  mpg: 28,
  zip: 94122,
  lat: 37.763562, 
  lng: -122.498625
)

car3 = Car.create!(
  owner_id: pop.id,
  rate: '130',
  make: 'Fiat',
  model: 'Spyder', 
  year: '1975',
  color: 'blue',
  transmission: 'manual',
  seats: '4',
  description: 'A classic.',
  plate: '3DH3JD8',
  address: '2300 3rd St',
  city: 'San Francisco',
  state: 'CA',
  mpg: 28,
  zip: 94107,
  lat: 37.759995, 
  lng: -122.388470
)