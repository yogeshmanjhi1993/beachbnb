json.extract! review, :id, :user_id, :spot_id, :body, :created_at
json.user do
  json.extract! review.user, :fname, :image
end
