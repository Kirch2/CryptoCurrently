class Cryptocurrency < ApplicationRecord
    validates :label, :symbol, uniqueness: true
    validates :label, :symbol, :description, :marketCap, :logoUrl, :change_24h, :change_7d, presence: true
end
