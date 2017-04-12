Rails.application.routes.draw do
  get 'pokemon/index'

  namespace :v1 do
    get '/me', to: 'accounts#show'
    get '/accounts/update', to: 'accounts#update'
    post '/registrations', to: 'registrations#create'
    get '/pokemon', to: 'pokemon#index'
    resources :sessions, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
