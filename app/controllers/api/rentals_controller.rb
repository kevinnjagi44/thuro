class Api::RentalsController < ApplicationController

  # skip_before_action :verify_authenticity_token

  # before_action :require_logged_in

  def index
    @rentals = Rental.where(renter_id: current_user.id).order(start_date: :asc)
    render :index
  end

  def show
    @rental = current_user.rentals.find_by_id(params[:id])
    render :show
  end

  def create
    @rental = Rental.new(rental_params)
    @rental.renter_id = current_user.id

    if @rental.save
      render :show
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  def update
    @rental = Rental.find(params[:id])
    if @rental.update_attributes(rental_params)
      render :show
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  def destroy
    @rental = Rental.find(params[:id])
    @rental.delete
    render :show
  end

  private

  def rental_params
    params.require(:rental).permit(
      :start_date,
      :end_date,
      :renter_id,
      :car_id,
      :status
    )
  end

end
