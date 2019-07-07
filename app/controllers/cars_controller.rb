class CarsController < ApplicationController
  def show
    @car = Car.find(params[:id])
    render :show
  end
end

# Test photo display