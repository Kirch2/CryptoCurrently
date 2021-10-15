class CryptoAlert < ApplicationRecord
  belongs_to :cryptocurrency
  belongs_to :user
end
