require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  Car.destroy_all
  User.destroy_all
  
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
    rate: 168,
    make: 'Ford',
    model: 'Mustang', 
    year: 2017,
    color: 'black',
    transmission: 'manual',
    seats: 4,
    doors: 2,
    description: 'Fun ride. VERY loud. Ignore the stains in the back.',
    plate: '9DJ28H',
    address: '825 Battery St',
    city: 'San Francisco',
    state: 'CA',
    mpg: 24,
    zip: 94111,
    lat: 37.799017,
    lng: -122.401116,
    gps: true,
    audio_input: true,
    toll_pass: true,
    longterm_car: true
  )
  car1.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/stang.jpg'), filename: 'car1_stang.jpg')

  car2 = Car.create!(
    owner_id: frankie.id,
    rate: 490,
    make: 'Ferrari',
    model: 'F50', 
    year: 1995,
    color: 'red',
    transmission: 'manual',
    seats: 2,
    doors: 2,
    description: 'Great fun. I\'ve definitely put myself in debt as a result of purchasing this car, but no regrets.',
    plate: '8DYJDHL',
    address: '2300 3rd St',
    city: 'San Francisco',
    state: 'CA',
    mpg: 18,
    zip: 94107,
    lat: rand(37.714118..37.787958),
    lng: rand(-122.504908..-122.390212),
    gps: true,
    convertible: true
  )
  car2.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/ferrari.jpg'), filename: 'car2_ferrari.jpg')

  car3 = Car.create!(
    owner_id: steve.id,
    rate: 180,
    make: 'Lexus',
    model: 'IS350', 
    year: 2018,
    color: 'gray',
    transmission: 'automatic',
    seats: 5,
    doors: 4,
    description: 'Purchased brand new in 2017 with a ton of features. This car is my baby... Please take good care of it!',
    plate: '6D8SA6S',
    address: '1200 39th Ave',
    city: 'San Francisco',
    state: 'CA',
    mpg: 28,
    zip: 94122,
    lat: 37.763562, 
    lng: -122.498625, 
    heated_seats: true,
    gps: true,
    bluetooth: true,
    usb_input: true
  )
  car3.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/is350.jpg'), filename: 'car3_is350.jpg')

  car4 = Car.create!(
    owner_id: pop.id,
    rate: 150,
    make: 'Fiat',
    model: 'Spyder', 
    year: 1975,
    color: 'blue',
    transmission: 'manual',
    seats: 4,
    doors: 2,
    description: 'A classic. This is actually my dad\'s car, who is currently on vacation. I figured I\'d rent it out for some extra cash while he\'s gone ;)',
    plate: '3DH3JD8',
    address: '2300 3rd St',
    city: 'San Francisco',
    state: 'CA',
    mpg: 28,
    zip: 94107,
    lat: 37.759995, 
    lng: -122.388470,
    convertible: true
  )
  car4.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/fiat.jpg'), filename: 'car4_fiat.jpg')

  car5 = Car.create!(
    owner_id: frankie.id,
    rate: 105,
    make: 'Ford',
    model: 'Mustang FOX body', 
    year: 1991,
    color: 'black',
    transmission: 'manual',
    seats: 4,
    doors: 2,
    description: 'Sure to annoy your neighbors.',
    plate: '9DJFWJD',
    address: '9120 8th St',
    city: 'San Francisco',
    state: 'CA',
    mpg: 28,
    zip: 94107,
    lat: 37.759995, 
    lng: -122.388470, 
    pet_friendly: true,
    child_seat: true,
    snow_tires_chains: true
  )
  car5.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/fox.jpg'), filename: 'car5_fox.jpg')

  car6 = Car.create!(
    owner_id: frankie.id,
    rate: 140,
    make: 'Ford',
    model: 'Falcon', 
    year: 1990,
    color: 'green',
    transmission: 'manual',
    seats: 2,
    doors: 4,
    description: 'The Australian dream car.',
    plate: '824JDUUX',
    address: '2300 3rd St',
    city: 'San Francisco',
    state: 'CA',
    mpg: 28,
    zip: 94107,
    lat: rand(37.714118..37.787958),
    lng: rand(-122.504908..-122.390212),
    audio_input: true,  
    gps: true,
    sunroof: true,
    ski_rack: true
  )
  car6.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/falcon.jpg'), filename: 'car6_falcon.jpg')

  car7 = Car.create!(
    owner_id: frankie.id,
    rate: 120,
    make: 'Mercedes-Benz',
    model: 'S Turbo Diesel', 
    year: 1980,
    color: 'gold',
    transmission: 'automatic',
    seats: 5,
    doors: 4,
    description: 'Purrs like a kitten.',
    plate: '412SJSD',
    address: '4261 17th Ave',
    city: 'San Francisco',
    state: 'CA',
    mpg: 28,
    zip: 94122,
    lat: rand(37.714118..37.787958),
    lng: rand(-122.504908..-122.390212),
    child_seat: true,
    toll_pass: true
  )
  car7.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/mercedes.jpg'), filename: 'car7_mercedes.jpg')

  car8 = Car.create!(
    owner_id: frankie.id,
    rate: 520,
    make: 'Lamborghini',
    model: 'Aventador', 
    year: 2018,
    color: 'white',
    transmission: 'manual',
    seats: 2,
    doors: 2,
    description: 'SO fast. So loud. I drive it to and from work each day and my ears won\'t stop ringing. It hurts so good.',
    plate: '27DHJE2',
    address: '42 Main St.',
    city: 'San Francisco',
    state: 'CA',
    mpg: 19,
    zip: 94109,
    lat: rand(37.714118..37.787958),
    lng: rand(-122.504908..-122.390212),
    awd: true,
    gps: true,
    audio_input: true,
    bluetooth: true
  )
  car8.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/lambo.jpg'), filename: 'car8_lambo.jpg')

  car9 = Car.create!(
    owner_id: frankie.id,
    rate: 600,
    make: 'Ford',
    model: 'Gran Torino', 
    year: 1972,
    color: 'green',
    transmission: 'automatic',
    seats: 4,
    doors: 2,
    description: 'The exact car from the Clint Eastwood movie! If you check the glove box, you will find the exact pack of cigarettes he smoked.',
    plate: '18DHTKZ',
    address: '612 8th St',
    city: 'San Francisco',
    state: 'CA',
    mpg: 28,
    zip: 94111,
    lat: rand(37.714118..37.787958),
    lng: rand(-122.504908..-122.390212),
    toll_pass: true,
    longterm_car: true
  )
  car9.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/gran-torino.jpg'), filename: 'car9_gran-torino.jpg')

  car10 = Car.create!(
    owner_id: frankie.id,
    rate: 175,
    make: 'Tesla',
    model: 'Model 3', 
    year: 2019,
    color: 'red',
    transmission: 'none',
    seats: 5,
    doors: 4,
    description: 'Instant torque. Fun and comfy ride.',
    plate: '82JD2JA',
    address: '2 18th St',
    city: 'San Francisco',
    state: 'CA',
    mpg: 0,
    zip: 94814,
    lat: rand(37.714118..37.787958),
    lng: rand(-122.504908..-122.390212),
    heated_seats: true,
    gps: true,
    bluetooth: true,
    sunroof: true,
    usb_input: true,
    audio_input: true
  )
  car10.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/model3.jpg'), filename: 'car10_model3.jpg')

  car11 = Car.create!(
    owner_id: frankie.id,
    rate: 160,
    make: 'Fiat',
    model: 'Spyder', 
    year: 2018,
    color: 'black',
    transmission: 'manual',
    seats: 2,
    doors: 2,
    description: 'Great for a drive along the coast. The convertible top doesn\'t function, but who needs it?',
    plate: '47DJR2K',
    address: '1457 Market St.',
    city: 'San Francisco',
    state: 'CA',
    mpg: 25,
    zip: 94184,
    lat: rand(37.714118..37.787958),
    lng: rand(-122.504908..-122.390212),
    gps: true,
    convertible: true,
    usb_input: true,
    pet_friendly: true,
    bluetooth: true
  )
  car11.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/fiat-new.jpg'), filename: 'car11_fiat-new.jpg')

  car12 = Car.create!(
    owner_id: pop.id,
    rate: 200,
    make: 'Jeep',
    model: 'Wrangler Rubicon', 
    year: 2018,
    color: 'green',
    transmission: 'automatic',
    seats: 5,
    doors: 4,
    description: 'Very rugged car. Drive with the top down and purposely swerve into mud puddles. Feel free to get it as dirty as you want.',
    plate: '47DJR2K',
    address: '1776 24th Ave.',
    city: 'San Francisco',
    state: 'CA',
    mpg: 23,
    zip: 94121,
    lat: rand(37.714118..37.787958),
    lng: rand(-122.504908..-122.390212),
    gps: true,
    convertible: true,
    usb_input: true,
    snow_tires_chains: true,
    bluetooth: true,
    audio_input: true
)
car12.photos.attach(io: open('https://torino-seeds.s3-us-west-1.amazonaws.com/jeep.jpg'), filename: 'car12_jeep.jpg')

end
