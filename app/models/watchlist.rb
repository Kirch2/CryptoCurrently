class Watchlist < ApplicationRecord
  belongs_to :user
  has_many :watchlist_entries
  has_many :watchlist_alerts
  validates :label, :description, presence: true
  before_destroy :destroy_watchlist_entries
  def destroy_watchlist_entries
     self.watchlist_entries.destroy_all
     self.watchlist_alerts.destroy_all
  end   
end
