class AddPriceToSpots < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :price, :integer, null: false
  end
end
