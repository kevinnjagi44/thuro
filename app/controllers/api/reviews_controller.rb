class Api::ReviewsController < ApplicationController

  # before_action :require_logged_in

  def index
    @reviews = Review.where(car_id: params[:car_id])
    render :index
  end

  def show
    @review = Review.find_by_id(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id

    if @review.save
      @author = @review.author
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: ['Review deleted']
  end

  private

  def review_params
    params.require(:review).permit(
      :author_id,
      :car_id,
      :rating
      :title,
      :body
    )
  end

end
