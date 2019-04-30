Rails.application.routes.draw do
  devise_for :users
  resources :reviews
  root "home#index"

  get "my-profile", to: "users#show"
  get "my-reviews", to: "reviews#show"

  resources :users, param: :nickname, only: [:show] do
    resource :reviews
  end

  resources :reviews do
    resources :comments
  end
end
