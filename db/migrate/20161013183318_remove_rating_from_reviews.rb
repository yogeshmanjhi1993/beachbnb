class RemoveRatingFromReviews < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :rating, :integer
  end
end
