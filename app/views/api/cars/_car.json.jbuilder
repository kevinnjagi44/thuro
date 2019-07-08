json.extract! car, :id, :rate, :make, :model, :year, :color,:transmission, :seats, :description, :plate,:address, :city, :state,:zip, :lat, :lng, :mpg

if car.photo.attachment 
  json.photoUrl url_for(car.photo)
end 