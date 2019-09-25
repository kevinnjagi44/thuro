@rentals.each do |rental|
  json.set! rental.id do 
    json.partial! 'api/rentals/rental', rental: rental
  end
end