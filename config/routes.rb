Rails.application.routes.draw do
  devise_for :users
  root "home#index"
  resource :reviews, only: [:show]
  get "my-profile", to: "users#show"
  get "my-reviews", to: "reviews#index"
  resources :users, param: :nickname, only: [:show] do
    resources :reviews
  end

  resources :reviews, except: [:index] do
    resources :comments
  end
end
