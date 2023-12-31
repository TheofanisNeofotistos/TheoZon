class Api::CartsController < ApplicationController
    before_action :require_logged_in

    wrap_parameters include: Cart.attribute_names + ["productId"]

    def create 
        
        @cart = Cart.new(cart_item_params)
       
        if @cart.save
            # render something
            render "api/carts/show"
        else 
            render json: @cart.errors.full_messages, status: 422
        end
        
    end 

    def destroy
        @cart = Cart.find(params[:id])
        if @cart 
            @cart.delete
            render json: "Succesfully deleted "
        end
    end 


    def update
        @cart = Cart.find(params[:id])
        if @cart && @cart.update(cart_item_params)
            render "api/carts/show"
            # render json: "Succesfully updated "
        else 
            render json: {error: 'Cart could not be updated'}, status: 422
        end
    end 


    def cart_item_params
        params.require(:cart).permit(:id,:user_id,:product_id,:quantity)
    end
end
