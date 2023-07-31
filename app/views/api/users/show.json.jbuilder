json.user do
    json.extract! @user, :id, :email, :username, :created_at, :updated_at
end

json.cart do 

    @user.cart_items.each do |cart_item|
        json.set! cart_item.id do 
            json.extract! cart_item, :id, :user_id, :product_id, :quantity
        end
    end
    
end 