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

        
        session.delete(:user_id)
        # session.delete(:session_id)
        # current_user = nil


        # reset_session


        
        # sign_out(current_user)



        
        # current_user = nil
        
        # session.delete(:user_id)
        # render json: {logout: "completed"}, status: :ok
      end


end
