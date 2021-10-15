class Watchlist < ApplicationRecord
  belongs_to :user
  has_many :watchlist_entries
  validates :label, :description, presence: true
  before_destroy :destroy_watchlist_entries
  def destroy_watchlist_entries
     self.watchlist_entries.destroy_all
  end   
end
