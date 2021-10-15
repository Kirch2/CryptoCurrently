class WatchlistEntry < ApplicationRecord
  belongs_to :watchlist
  belongs_to :cryptocurrency
end
