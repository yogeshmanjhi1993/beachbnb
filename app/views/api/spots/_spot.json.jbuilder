json.extract! spot, :id, :description, :host_id, :lat, :lng,
                    :beds, :roomtype, :name, :price, :guests,
                    :image, :address, :kind, :city, :country, :host,
                    :reviews
json.reviews spot.reviews do |review|
  json.id review.id
  json.spot_id review.spot_id
  json.user_id review.user_id
  json.body review.body
  json.userName review.user.fname
  json.createdAt review.created_at
end
