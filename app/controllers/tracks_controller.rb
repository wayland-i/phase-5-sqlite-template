class TracksController < ApplicationController


    def index
        render json: Track.all, status: :ok
    end

    def create
        track = Track.create(track_params)
        render json: track, status: :created
    end

    private

    def track_params
        params.permit(:audio_data, :card_id)
    end

end
