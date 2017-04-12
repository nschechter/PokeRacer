# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170412215850) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "account_races", force: :cascade do |t|
    t.integer  "account_id"
    t.integer  "race_id"
    t.integer  "final_position"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["account_id"], name: "index_account_races_on_account_id", using: :btree
    t.index ["race_id"], name: "index_account_races_on_race_id", using: :btree
  end

  create_table "accounts", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.integer  "pokemon_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["pokemon_id"], name: "index_accounts_on_pokemon_id", using: :btree
  end

  create_table "pokemons", force: :cascade do |t|
    t.string   "name"
    t.string   "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "weight"
    t.integer  "height"
    t.integer  "speed"
    t.integer  "type"
  end

  create_table "races", force: :cascade do |t|
    t.text     "results"
    t.integer  "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean  "is_active"
  end

  add_foreign_key "account_races", "accounts"
  add_foreign_key "account_races", "races"
  add_foreign_key "accounts", "pokemons"
end
