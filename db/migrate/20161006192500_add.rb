class Add < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :name, :string, null: false
  end
end
