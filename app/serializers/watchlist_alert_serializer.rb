class WatchlistAlertSerializer < ActiveModel::Serializer
  attributes :id, :frequency, :delivery_method
  has_one :watchlist
  has_one :user
end
