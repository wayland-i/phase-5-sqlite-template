class SessionsController < ApplicationController

    #login
    def create
        user = User.find_by(params[:name])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
          render json: {error: "Invalid Credentials"}, status:
          :unauthorized
        end
      end
    
      #logout
      def destroy
        session.delete :user_id
      end


end
