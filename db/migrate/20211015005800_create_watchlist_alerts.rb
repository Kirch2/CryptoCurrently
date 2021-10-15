class CreateWatchlistAlerts < ActiveRecord::Migration[6.1]
  def change
    create_table :watchlist_alerts do |t|
      t.string :frequency
      t.string :delivery_method
      t.references :watchlist, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
