class Api::ProductsController < ApplicationController
    def show 
        @product = Product.select(:id,:item_name,:item_description,:item_price)

        render :show 
    end 

    def index 
        @products = Product.select(:id,:item_name,:item_description,:item_price)

        render :index 
    end 

    
end
