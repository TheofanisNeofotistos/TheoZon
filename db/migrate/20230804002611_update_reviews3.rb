class UpdateReviews3 < ActiveRecord::Migration[7.0]
  def change
    remove_index :reviews, :body
  end
end
