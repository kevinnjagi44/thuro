json.extract! car, :id, :owner_id, :rate, :make, :model, :year, :color,:transmission, :seats, :description, :plate,:address, :city, :state,:zip, :lat, :lng, :mpg, :photo if car.photo

# if car.photo.attachment 
#   json.photo url_for(car.photo)
# end 