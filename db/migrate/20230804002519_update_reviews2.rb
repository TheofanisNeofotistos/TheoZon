class UpdateReviews2 < ActiveRecord::Migration[7.0]
  def change
    add_index :reviews, :user_id
  end
end
