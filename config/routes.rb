Rails.application.routes.draw do
  # resources :tasks

  # root "tasks#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'pages#index'

  resources :tasks

  put '/tasks', to: 'tasks#index_sort'

  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb
  match '*path', to: 'pages#index', via: :all

end
