json.extract! car, :id, :owner_id, :rate, :make, :model, :year, :color,:transmission, :seats, :description, :plate,:address, :city, :state,:zip, :lat, :lng, :mpg

if car.photos.attachments
  # json.photoUrl url_for(car.photo)
  json.photoUrls @post.photos.map { |file| url_for(file) }
end 