@rentals.each do |rental|
  json.set! rental.id do 
    json.extract! rental, :start_date, :end_date
  end
end