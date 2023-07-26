class ChangeTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :products, :inem_price, :item_price
  end
end
