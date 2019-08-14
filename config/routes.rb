Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :cars, only: [:create, :index, :show, :update, :destroy] 
    
    resources :rentals, only: [:create, :index, :show, :update, :destroy]
    
  end

  resources :cars, only: [:show] # Test photo display

  root "static_pages#root"
  
end
