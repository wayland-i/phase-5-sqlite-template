class ApplicationController < ActionController::API

    before_action :authenticate_user

    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


    private

    #checking to see if there is a current user
    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end 

     def render_not_found(error)
        #confiure the response to work with the error handleng we have on the frontend. 
        render json: {errors: {error.model => "Not Found"}}, status: :not_found
    end 

    def authenticate_user 
        # to check and see if my user is logged in and if they are then we are going to let them see parts of our app 
        render json: { errors: {User: "Not Authorized"} }, status: :unauthorized unless current_user
    end


end

      