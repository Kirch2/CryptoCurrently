class CryptocurrencySerializer < ActiveModel::Serializer
  attributes :id, :label, :description, :price, :marketCap, :symbol, :logoUrl, :change_24h, :change_7d
end
