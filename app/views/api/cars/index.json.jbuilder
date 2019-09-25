@cars.each do |car|
  json.set! car.id do 
    json.partial! 'api/cars/car', car: car

    if car.photos.attachments
      json.photoUrl url_for(car.photos.first) 
    end 

  end
end


