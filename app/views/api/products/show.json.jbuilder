reviews = @product.reviews

reviews.each do |review|
    json.reviews do 
        json.set! review.id do 
            json.extract! review, :id, :body, :title, :user_id, :product_id
        end 
    end
end


json.product do
    json.set! @product.id do 
        json.extract! @product, :id, :item_name, :item_description , :item_price, :created_at , :updated_at
        json.photoUrl @product.photo.attached? ? @product.photo.url : nil

    end 
end