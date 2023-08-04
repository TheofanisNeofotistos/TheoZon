class UpdateReviews < ActiveRecord::Migration[7.0]
  def change
    remove_index :reviews, :user_id
    remove_index :reviews, :product_id
  end
end
