@cars.each do |car|
  json.set! car.id do 
  json.extract! car, :owner_id, :id, :rate, :make, :model, :year, :color,:transmission, :seats, :description, :plate, :address, :city, :state, :zip, :lat, :lng, :mpg #, :awd, :audio_input, :bike_rack, :bluetooth, :child_seat, :convertible, :gps, :heated_seats, :longterm_car, :pet_friendly, :ski_rack, :snow_tires_chains, :sunroof, :toll_pass, :usb_input    

    if car.photos.attachments
      json.photoUrl url_for(car.photos.first) 
    end 

  end
end

