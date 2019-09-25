json.extract! rental, :id, :car_id, :renter_id, :start_date, :end_date, :status

json.fName "#{rental.renter.fname}"

json.car do
  json.partial! 'api/cars/car', car: rental.car
end