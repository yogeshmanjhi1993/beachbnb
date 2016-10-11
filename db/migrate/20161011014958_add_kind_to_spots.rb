class AddKindToSpots < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :kind, :string, null: false
  end
end
