json.products do
    @products.each do |product|
        json.set! product.id do 
            json.extract! product, :id, :item_name, :item_description , :item_price, :created_at , :updated_at
        end 
    end
end


