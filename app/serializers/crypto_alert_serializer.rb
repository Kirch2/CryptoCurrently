class CryptoAlertSerializer < ActiveModel::Serializer
  attributes :id, :threshold_operator, :threshold_value, :delivery_method
  has_one :cryptocurrency
  has_one :user
end
