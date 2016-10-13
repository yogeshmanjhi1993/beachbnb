Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :index, :show, :destroy, :update]
    resources :bookings, only: [:create, :show, :index, :destroy]
    resources :reviews, only: [:create, :show, :index, :destroy]
  end
end
