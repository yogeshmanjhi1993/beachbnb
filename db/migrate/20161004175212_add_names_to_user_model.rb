class AddNamesToUserModel < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :username
    add_column :users, :email, :string
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_index :users, :email, unique: true
  end
end
