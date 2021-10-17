class ChangeIntegerLimitInCryptocurrencies < ActiveRecord::Migration[6.1]
  def change
    change_column :cryptocurrencies, :marketCap, :integer, limit: 8
  end
end
