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

    has_many :reviews 
    has_many :carts

end
