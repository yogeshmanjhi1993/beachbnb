class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :description, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.string :roomtype, null: false
      t.timestamps
    end

    add_index :spots, :host_id
  end
end
