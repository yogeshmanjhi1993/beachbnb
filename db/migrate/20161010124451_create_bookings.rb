class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :guest_id, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.timestamps
    end

    add_index :bookings, :spot_id
    add_index :bookings, :guest_id
  end
end
