class CreateCryptoAlerts < ActiveRecord::Migration[6.1]
  def change
    create_table :crypto_alerts do |t|
      t.string :threshold_operator
      t.float :threshold_value
      t.string :delivery_method
      t.references :cryptocurrency, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
