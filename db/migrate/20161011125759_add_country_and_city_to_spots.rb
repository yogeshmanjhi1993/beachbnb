class AddCountryAndCityToSpots < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :country, :string, null: false
    add_column :spots, :city, :string, null: false
  end
end
