class RemovelocationandbedroomsfromSpots < ActiveRecord::Migration[5.0]
  def change
    remove_column :spots, :bedrooms, :integer
  end
end
