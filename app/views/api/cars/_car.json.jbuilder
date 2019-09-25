json.extract! car, :owner_id, :id, :rate, :make, :model, :year, :color,:transmission, :seats, :doors, :description, :plate, :address, :city, :state, :zip, :lat, :lng, :mpg , :awd, :audio_input, :bike_rack, :bluetooth, :child_seat, :convertible, :gps, :heated_seats, :longterm_car, :pet_friendly, :ski_rack, :snow_tires_chains, :sunroof, :toll_pass, :usb_input

json.fName "#{car.owner.fname}"
# json.ownerId "#{car.owner.id}"

json.reviews do
  car.reviews.each do |review|
    json.set! review.id do 
      json.partial! 'api/reviews/review', review: review
    end
  end
end

json.rentals do 
  car.rentals.each do |rental|
    json.set! rental.id do
      json.id rental.id
      json.renter_id rental.renter_id
      json.fname rental.renter.fname
      json.start_date rental.start_date
      json.end_date rental.end_date
    end
  end
end

if car.photos.attachments
  # json.photoUrl url_for(car.photo)
  json.photoUrls car.photos.map { |photo| url_for(photo) }
end 
