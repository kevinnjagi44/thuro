json.partial! "api/cars/car", car: @car

json.reviews do
  @car.reviews.each do |review|
    json.set! review.id do 
      json.partial! 'api/reviews/review', review: review
    end
  end
end