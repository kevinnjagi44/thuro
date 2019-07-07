@cars.each do |car|
  json.set! car.id do 
  json.extract! car, :rate, :make, :model, :year, :color,:transmission, :seats, :description, :plate,:address, :city, :state,:zip, :lat, :lng    

    if car.photo.attachment 
      json.photoUrl url_for(car.photo)
    end 

  end
end

