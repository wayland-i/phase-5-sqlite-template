class CardsController < ApplicationController
    skip_before_action :authenticate_user, only: :cards_home

    def index
        render json: Card.all.reverse, status: :ok
    end

    def cards_home
        cards = Card.all
        home_cards = cards.filter_map { |c| c if c.is_public}.reverse
        render json: home_cards, status: :ok
    end

    def create
        card = Card.create!(card_params)
        render json: card, status: :created
    end

    def update
        card = Card.find(params[:id])
        card.update(update_params)
        render json: card, status: :accepted
    end

    def cards_privacy
        card = Card.find(params[:id])
        card.update!(update_params)
        render josn: card, status: :accepted
    end

    def cards_title
        card = Card.find(params[:id])
        card.update!(update_title_params)
        render json: card, status: :accepted
    end

    def cards_description
        card = Card.find(params[:id])
        card.update!(update_description_params)
        render json: card, status: :accepted
    end

    def destroy
        card = Card.find(params[:id])
        card.destroy
        head :no_content
    end

    # def cards_sorted
    #     byebug
    #     cards = Card.all
    #     cards_sorted = cards.sort_by(:created_at)
    #     render json: cards_sorted, status: :ok
    # end

    # #@total.sort_by(&:created_at)
    # #@total.order({ created_at: :desc })

    private

    def card_params
        params.permit(:title, :description, :is_public, :user_id)
    end

    def update_params
        params.permit(:id, :is_public)
    end

    def update_title_params
        params.permit(:id, :title)
    end

    def update_description_params
        params.permit(:id, :description)
    end
end
