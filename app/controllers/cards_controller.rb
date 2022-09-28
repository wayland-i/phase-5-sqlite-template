class CardsController < ApplicationController

    def index
        render json: Card.all, status: :ok
    end

    def cards_home
        cards = Card.all
        home_cards = cards.filter_map { |c| c if c.is_public}
        render json: home_cards, status: :ok
    end

    def create
        card = Card.create!(card_params)
        render json: card, status: :created
    end

    def update
        byebug
        card = Card.find(params[:id])
        card.update(update_params)
        render json: card, status: :accepted
    end

    def cards_privacy
        card = Card.find(params[:id])
        card.update!(update_params)
        render josn: card, status: :accepted
    end

    def destroy
        card = Card.find(params[:id])
        card.destroy
        head :no_content
    end

    private

    def card_params
        params.permit(:title, :description, :is_public, :user_id)
    end

    def update_params
        params.permit(:id, :is_public)
    end
end
