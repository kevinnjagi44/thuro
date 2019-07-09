class Api::CarsController < ApplicationController

  # skip_before_action :verify_authenticity_token

  # before_action :require_logged_in, only: [:create]

  def index
    @cars = Car.all
  end

  def create
    @car = Car.new(car_params)
    @car.owner_id = current_user.id
    if @car.save
      render "api/cars/show"
      # render :show
      # render :index
    else
      render json: @car.errors.full_messages, status: 422
    end
  end

  def update
    @car = Car.find(params[:id])
    if @car.update_attributes(car_params)
      # render :show
      render "api/cars/show"
    else
      render json: @car.errors.full_messages, status: 422
    end
  end
  
  def show
    @car = Car.find(params[:id])
    render "api/cars/show"
  end

  def destroy
    @car = Car.find(params[:id])
    if @car.delete
      @cars = Car.all
      render "api/cars/show"
    else
      render json: @car.errors.full_messages, status: 422
    end
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
      :mpg,
      :description, 
      :plate, 
      :address, 
      :city, 
      :state, 
      :zip,
      :lat,
      :lng,
      # :photo
      photos: []
    )
  end


end
