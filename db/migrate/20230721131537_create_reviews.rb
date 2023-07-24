class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :body , null: false , index: {unique: true }
      t.references :user , to_table: :users , null: false , index: { unique: true }
      t.references :product , to_table: :products , null: false , index: { unique: true }

      t.timestamps
    end
  end
end
