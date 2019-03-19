Rails.application.routes.draw do
  devise_for :users
  resources :reviews, except: [:index]
  root 'home#index'
  get '/homepage/index'

  resources :users do
  	resources :reviews
	end

	resources :reviews do
  		resources :comments
  end
end
