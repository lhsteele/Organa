Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:show] do
      resources :lists, only: [:index, :create]
    end
    resources :projects, except: [:show] do
      member do
        patch :archive, to: "projects#archive", as: "archive"
      end
    end
    resources :lists, only: [:destroy, :update]
    resources :lists, only: [:show, :create] do
      resources :tasks, only: [:index, :create]
    end
    resources :tasks, only: [:show, :update, :destroy]
  end
end
