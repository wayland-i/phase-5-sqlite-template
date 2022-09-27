class CardsController < ApplicationController

    def index
        render json: Card.all, status: :ok
    end

    def create
        card = Card.create(card_params)
        render json: card, status: :created
    end

    def update
        byebug
        card = Card.find(params[:id])
        card.update(update_params)
        render json: card, status: :accepted
    end

    private

    def card_params
        params.permit(:title, :description, :is_public, :user_id)
    end

    def update_params
        params.permit(:id, :is_public)
    end
end
