json.cart do 
    json.extract @cart, :id, :user_id, :product_id, :quantity
end