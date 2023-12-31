Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    get 'products/search', to: "products#search"
    resources :users, only: [:create,:show]
    resources :products, only: [:show,:index]
    resources :carts , only: [:create, :update, :destroy, :show]
    resources :reviews, only: [:create, :update, :destroy]
    resource :session, only: [:create, :show, :destroy]
    delete 'users/:id', to: "users#checkout"

  end

  get '*path', to: "static_pages#frontend_index"
  
end
