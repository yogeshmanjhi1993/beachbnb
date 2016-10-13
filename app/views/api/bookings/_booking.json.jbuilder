json.extract! booking, :id, :guest_id, :spot_id, :start_date, :end_date
json.spot do
  json.image booking.spot.image.url
  json.extract! booking.spot, :id, :city, :address, :country, :price
end
