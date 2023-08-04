class Api::UsersController < ApplicationController
    
    wrap_parameters include: User.attribute_names + ['password']

    before_action :require_logged_out, only: [:create]
    
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json: { errors: @user.errors.full_messages},status: 422
        end
    end

    def show
    
        @user = User.find_by(id: params[:id])
    end

    def checkout 
        @user = User.find(params[:id])
        @user.cart_items.destroy_all
    end 



    private

    def user_params
        params.require(:user).permit(:username,:email, :password)
    end
end
