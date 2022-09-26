class CardsController < ApplicationController

    def create
        card = Card.create(card_params)
        render json: card, status: :created
    end

    private

    def card_params
        params.permit(:title, :description, :user_id)
    end
end
