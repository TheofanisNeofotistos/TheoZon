class Cart < ApplicationRecord
    validates :quantity , presence: true 

    belongs_to :user
    belongs_to :products
end
