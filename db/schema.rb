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

ActiveRecord::Schema.define(version: 20161103145630) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "spot_id",    null: false
    t.integer  "guest_id",   null: false
    t.datetime "start_date", null: false
    t.datetime "end_date",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_bookings_on_guest_id", using: :btree
    t.index ["spot_id"], name: "index_bookings_on_spot_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "spot_id",    null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spots", force: :cascade do |t|
    t.integer  "host_id",            null: false
    t.float    "lat",                null: false
    t.float    "lng",                null: false
    t.string   "description",        null: false
    t.integer  "beds",               null: false
    t.string   "roomtype",           null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "name",               null: false
    t.integer  "price",              null: false
    t.integer  "guests",             null: false
    t.string   "address",            null: false
    t.string   "kind",               null: false
    t.string   "country",            null: false
    t.string   "city",               null: false
    t.index ["host_id"], name: "index_spots_on_host_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "password_digest"
    t.string   "session_token",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "email",              null: false
    t.string   "fname",              null: false
    t.string   "lname",              null: false
    t.string   "uid"
    t.string   "provider"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
