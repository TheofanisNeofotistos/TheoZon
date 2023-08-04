# == Schema Information
#
# Table name: products
#
#  id               :bigint           not null, primary key
#  item_name        :string           not null
#  item_description :text             not null
#  item_price       :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Product < ApplicationRecord
    validates :item_name, :item_description , :item_price , presence: true 

    has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review

    has_many :carts

    has_one_attached :photo

end
