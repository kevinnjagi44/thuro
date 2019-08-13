class Api::RentalsController < ApplicationController

  # before_action :require_logged_in, only: [:create, :destroy]

  def create
    @rental = Rental.new(rental_params)
    if @rental.save
      render :show
    else
      render json: @rental.errors.full_messages
    end
  end

  def update
    @rental = Rental.find(params[:id])
    if @rental.update_attributes(rental_params)
      render :show
    else
      render json: @rental.errors.full_messages
    end
  end

  def destroy
    @rental = Rental.find(params[:id])
    if @rental.delete
      @rentals = Rental.all
      render "api/rentals/show"
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  private

  def rental_params
    params.require(:rental).permit(
      :start_date,
      :end_date
      # :status
    )
  end

end
