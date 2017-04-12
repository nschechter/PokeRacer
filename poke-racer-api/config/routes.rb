Rails.application.routes.draw do
  namespace :v1 do
    get '/me', to: 'accounts#show'
    get 'accounts/update', to: 'accounts#update'
    get 'registrations/create', to: 'registrations#create'
    resources :sessions, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
