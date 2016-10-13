Rails.application.routes.draw do
  root to: "static_pages#root"
  get 'auth/google_oauth2/callback', to: 'api/sessions#omni_create', defaults: { format: :json }

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :index, :show, :destroy, :update]
    resources :bookings, only: [:create, :show, :index, :destroy]
    resources :reviews, only: [:create, :show, :index, :destroy]
  end
end
