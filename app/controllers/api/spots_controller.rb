class Api::SpotsController < ApplicationController
  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def index
    @spots = params[:bounds] ? Spot.in_bounds(params[:bounds]) : Spot.all
    @spots = @spots.select do |spot|
      spot.price.between?(params[:priceRange][:min].to_i, params[:priceRange][:max].to_i) &&
      params[:roomtype].include?(spot.roomtype)
    end

  end

  def show
    @spot = Spot.find(params[:id])
  end

  private

  def spot_params
    params.require(:spot).permit(:host_id,
                                 :lat,
                                 :lng,
                                 :bedrooms,
                                 :beds,
                                 :guests,
                                 :roomtype,
                                 :description,
                                 :name,
                                 :guests,
                                 :price)
  end
end
