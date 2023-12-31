class Api::ReviewsController < ApplicationController
    before_action :require_logged_in 
    # cannot write a review unless logged in 
    wrap_parameters include: Review.attribute_names + ["product_id"]
    def create 
    
        @review = Review.new(review_params)

        @review.user_id = current_user.id

        if @review.save 
            render "api/reviews/show"
        end

    end 

    def destroy
        @review = Review.find(params[:id])

        if current_user.id == current_user.id
            @review.delete
        end

    end 

    def update 
        @review = Review.find(params[:id])

        if current_user.id == current_user.id
            @review.delete
        end

    end 


    def review_params
        params.require(:review).permit(:product_id, :body , :title)
    end



end
