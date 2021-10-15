class CreateWatchlists < ActiveRecord::Migration[6.1]
  def change
    create_table :watchlists do |t|
      t.string :label
      t.string :description
      t.boolean :private
      t.float :dailyPerformance
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
