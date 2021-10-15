class CreateCryptocurrencies < ActiveRecord::Migration[6.1]
  def change
    create_table :cryptocurrencies do |t|
      t.string :label
      t.string :description
      t.integer :marketCap
      t.float :price
      t.string :symbol
      t.string :logoUrl
      t.float :change_24h
      t.float :change_7d

      t.timestamps
    end
  end
end
