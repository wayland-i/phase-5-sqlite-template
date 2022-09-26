class CardsController < ApplicationController

    def index
        render json: Card.all, status: :ok
    end

    def create
        card = Card.create(card_params)
        render json: card, status: :created
    end

    private

    def card_params
        params.permit(:title, :description, :user_id)
    end
end
