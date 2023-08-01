class Api::CartsController < ApplicationController
    before_action :require_logged_in

    wrap_parameters include: Cart.attribute_names + ["productId"]

    def create 
        # debugger
        @cart = Cart.new(cart_item_params)
        @cart.user_id = current_user.id
        @user = current_user
        @cart.quantity = 1 
        # the line above is a placeholder for quantity 
        # debugger
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
        end
    end 

    def update
        @cart = Cart.find(params[:id])
        if @cart && @cart.update(cart_item_params)
            #render something 
        else 
            render json: {error: 'Cart could not be updated'}, status: 422
        end
    end 


    def cart_item_params
        params.require(:cart).permit(:id,:user_id,:product_id,:quantity)
    end
end
