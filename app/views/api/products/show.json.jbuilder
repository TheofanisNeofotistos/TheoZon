json.product do
    json.extract! @product, :id, :item_name, :item_description, :item_price, :created_at, :updated_at
end