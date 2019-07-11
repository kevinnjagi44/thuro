json.partial! "api/cars/car", car: @car

json.fName "#{@car.user.fname}"
json.ownerId "#{@car.user.id}"

# json.awd "#{@car.awd}"
# json.audioInput "#{@car.audio_input}"
# json.bikeRack "#{@car.bike_rack}"
# json.bluetooth "#{@car.bluetooth}"
# json.childSeat "#{@car.child_seat}"
# json.convertible "#{@car.convertible}"
# json.gps "#{@car.gps}"
# json.heatedSeats "#{@car.heated_seats}"
# json.longtermCar "#{@car.longterm_car}"
# json.petFriendly "#{@car.pet_friendly}"
# json.skiRack "#{@car.ski_rack}"
# json.snowTiresChains "#{@car.snow_tires_chains}"
# json.sunroof "#{@car.sunroof}"
# json.tollPass "#{@car.toll_pass}"
# json.usbInput "#{@car.usb_input}"

