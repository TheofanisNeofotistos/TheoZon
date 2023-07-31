class ChangeCarts2 < ActiveRecord::Migration[7.0]
  def change
    remove_index :carts, name: "index_carts_on_user_id"
  end
end
