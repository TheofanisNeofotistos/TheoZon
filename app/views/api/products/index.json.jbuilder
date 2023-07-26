json.products do
    json.extract! @products, :id, :item_name, :item_description, :item_price, :created_at, :updated_at
end