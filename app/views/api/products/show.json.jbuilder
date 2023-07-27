json.product do
    json.set! @product.id do 
        json.extract! @product, :id, :item_name, :item_description , :item_price, :created_at , :updated_at
        json.photoUrl @product.photo.attached? ? @product.photo.url : nil
    end 
end