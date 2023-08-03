class Api::ProductsController < ApplicationController
    def show 
        @product = Product. find_by(id: params[:id])

        render :show 
    end 

    def index 
        @products = Product.all

        render :index 
    end 

    def search 
        query = params[:query] 

        @products = Product
        .where('item_name ILIKE ? OR item_description ILIKE ?',"%#{query}%","%#{query}%")

        render :search
    end 

end
