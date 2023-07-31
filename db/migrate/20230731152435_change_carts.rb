class ChangeCarts < ActiveRecord::Migration[7.0]
  def change
    remove_index :carts,  name: "index_carts_on_product_id"
  end
end
