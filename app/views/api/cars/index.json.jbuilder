@cars.each do |car|
  json.set! car.id do 
  json.extract! car, :owner_id, :id, :rate, :make, :model, :year, :color,:transmission, :seats, :description, :plate, :address, :city, :state, :zip, :lat, :lng, :mpg    

    if car.photo.attachment 
      json.photo url_for(car.photo) #was photoUrl
    end 

  end
end

