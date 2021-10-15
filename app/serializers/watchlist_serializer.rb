class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :label, :description, :private, :dailyPerformance
  has_one :user
end
