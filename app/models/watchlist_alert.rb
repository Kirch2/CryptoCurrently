class WatchlistAlert < ApplicationRecord
  belongs_to :watchlist
  belongs_to :user
end
