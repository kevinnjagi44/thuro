@cars.each do |car|
  json.set! car.id do 
  json.extract! car, :rate, :make, :model, :year, :color,:transmission, :seats, :description, :plate,:address, :city, :state,:zip, :lat, :lng    
  # json.photoUrl url_for(car.photo)
  end
end

# json.array! @cars do |car|
#   json.extract! car, :make, :model
#   json.photoUrl url_for(car.photo)
# end

