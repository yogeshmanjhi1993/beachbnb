class AddNullFalseToUsersColumns < ActiveRecord::Migration[5.0]
  def change
    change_column_null :users, :email, false
    change_column_null :users, :fname, false
    change_column_null :users, :lname, false
  end
end
