class AddGuestsToSpots < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :guests, :integer, null: false
  end
end
