class TracksController < ApplicationController


    def index
        render json: Track.all, status: :ok
    end

    def create
        track = Track.create(track_params)
        render json: track, status: :created
    end

    def destroy
        track = Track.find(params[:id])
        track.destroy
        head :no_content
    end

    private

    def track_params
        params.permit(:audio_data, :card_id)
    end

end
