json.partial! "api/cars/car", car: @car

json.fName "#{@car.user.fname}"