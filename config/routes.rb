Rails.application.routes.draw do

  scope '/api' do
    # TODO - replace `resources` with individual GET/POST/PUT/DELETE routes
    resources :watchlist_entries
    resources :watchlists
    resources :cryptocurrencies
    resources :users
    post 'users/login', to: "users#login"
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
