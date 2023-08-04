json.review do
    json.extract! @review, :id, :user_id, :title, :body, :product_id, :created_at, :updated_at
end