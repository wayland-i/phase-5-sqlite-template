class SessionsController < ApplicationController

    skip_before_action :authenticate_user, only: :create

    #login
    def create
      user = User.find_by_username(params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
      else 
        render json: {error: "*Please enter an existing username and password*"}, status: :unauthorized
      end
  
    end
    
      #logout
      def destroy
        # byebug
        session.delete(:user_id)
        # reset_session
        # current_user = nil
        # session.clear
        # byebug
      end


end
