require 'resque/server'
require 'resque/scheduler'
require 'resque/scheduler/server'

Rails.application.routes.draw do

  mount Resque::Server.new, at:"/resque"
  
  scope '/api' do
    resources :watchlist_alerts
    resources :crypto_alerts
  # TODO - replace `resources` with individual GET/POST/PUT/DELETE routes
    resources :watchlist_entries
    resources :watchlists
    resources :cryptocurrencies
    resources :users
    post 'users/login', to: "users#login"
    post 'crypto_alerts/send_alerts', to: "crypto_alerts#send_alerts"
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
