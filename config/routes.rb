Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :show, :destroy]
    resources :users, only: [:create, :show, :destroy]
    
    resources :cars, only: [:create, :index, :show, :update, :destroy] do 
      resources :rentals, only: [:create]
    end

    resources :rentals, only: [:index, :show, :update, :destroy]

  end

  # resources :cars, only: [:show] # Test photo display

  root "static_pages#root"
  
end
