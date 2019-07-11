class Api::CarsController < ApplicationController

  # skip_before_action :verify_authenticity_token

  # before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @cars = Car.all
  end

  def create
    # debugger
    @car = Car.new(car_params)
    @car.owner_id = current_user.id
    if @car.save
      # render "api/cars/show"
      render :show
      # render :index
    else
      render json: @car.errors.full_messages, status: 422
    end
  end

  def update
    @car = Car.find(params[:id])
    # if @car.update_attributes(car_params)
    if @car.update(car_params)
      render :show
      # render "api/cars/show"
    else
      render json: @car.errors.full_messages, status: 422
    end
  end
  
  def show
    @car = Car.find(params[:id])
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
      :doors,
      :mpg,
      :description, 
      :plate, 
      :address, 
      :city, 
      :state, 
      :zip,
      :lat,
      :lng,
      :awd, 
      :audio_input, 
      :bike_rack, 
      :bluetooth, 
      :child_seat, 
      :convertible, 
      :gps, 
      :heated_seats, 
      :longterm_car, 
      :pet_friendly, 
      :ski_rack, 
      :snow_tires_chains, 
      :sunroof, 
      :toll_pass, 
      :usb_input,
       photos: []
    )
  end


end
