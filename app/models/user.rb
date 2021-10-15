class User < ApplicationRecord
    validates :username, :email, uniqueness: true
    validates :username, :email, presence: true
    has_many :watchlist
end
