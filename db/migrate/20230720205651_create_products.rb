class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :item_name , null: false , index: {unique: true}
      t.text :item_description , null: false 
      t.integer :inem_price, null: false 
      

      t.timestamps
    end
  end
end
