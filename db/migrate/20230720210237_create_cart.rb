class CreateCart < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false , index: {unique: true}
      t.integer :product_id , null: false , index: {unique: true}
      t.integer :quantity , null: false 


      t.timestamps
    end
  end
end
