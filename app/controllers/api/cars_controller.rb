class CarsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @cars = Car.all
  end

  def create
    @car = Car.new(car_params)
    if @car.save
      render "api/cars/show"
    else
      render json: @cars.errors.full_messages, status: 422
    end
  end
  
  def show
    @car = Car.find(params[:id])
  end


  def car_params
    params.require(:car).permit(
      :rate, 
      :make, 
      :model, 
      :year, 
      :color, 
      :transmission, 
      :seats, 
      :description, 
      :plate, 
      :address, 
      :city, 
      :state, 
      :zip,
      :lat,
      :lng
    )
  end


end
