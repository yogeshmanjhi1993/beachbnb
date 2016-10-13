class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def index
    @reviews = Review.where(spot_id: params[:spotId])
  end

  def destroy
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :spot_id, :body)
  end
end
