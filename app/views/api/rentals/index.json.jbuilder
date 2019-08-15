@rentals.each do |rental|
  json.set! rental.id do 
    json.partial! 'api/rentals/rental', rental: rental
  end

  # json.owner do 
  #   json.partial! 'api/users/user', user: rental.car.owner
  # end

  json.car do 
    json.partial! 'api/cars/car', car: rental.car
  end
end