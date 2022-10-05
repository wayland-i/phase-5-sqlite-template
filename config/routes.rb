Rails.application.routes.draw do
  resources :tracks
  resources :cards
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  patch '/cards_privacy/:id', to: "cards#cards_privacy"
  patch '/cards_title/:id', to: "cards#cards_title"
  patch '/cards_description/:id', to: "cards#cards_description"
  get '/cards_home', to: "cards#cards_home"
  get '/cards_sorted', to: "cards#cards_sorted"
end
