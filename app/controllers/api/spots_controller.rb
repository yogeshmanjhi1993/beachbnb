class Api::SpotsController < ApplicationController
  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
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
                                 :description)
  end
end
