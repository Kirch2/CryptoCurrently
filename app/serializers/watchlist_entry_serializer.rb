class WatchlistEntrySerializer < ActiveModel::Serializer
  attributes :id
  has_one :watchlist
  has_one :cryptocurrency
end
