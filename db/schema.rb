# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_05_202842) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cryptocurrencies", force: :cascade do |t|
    t.string "label"
    t.string "description"
    t.integer "marketCap"
    t.float "price"
    t.string "symbol"
    t.string "logoUrl"
    t.float "change_24h"
    t.float "change_7d"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "watchlist_entries", force: :cascade do |t|
    t.bigint "watchlist_id", null: false
    t.bigint "cryptocurrency_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cryptocurrency_id"], name: "index_watchlist_entries_on_cryptocurrency_id"
    t.index ["watchlist_id"], name: "index_watchlist_entries_on_watchlist_id"
  end

  create_table "watchlists", force: :cascade do |t|
    t.string "label"
    t.string "description"
    t.boolean "private"
    t.float "dailyPerformance"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

  add_foreign_key "watchlist_entries", "cryptocurrencies"
  add_foreign_key "watchlist_entries", "watchlists"
  add_foreign_key "watchlists", "users"
end
