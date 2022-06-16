Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/cars/index', to: "cars#index"
  get '/cars/:id', to: 'cars#show'

end
