# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guestuser = User.create(
  email: "guest@user.com",
  fname: "Guest",
  lname: "User",
  password: "guestpass"
)

otheruser = User.create(
  email: "other@user.com",
  fname: "Other",
  lname: "User",
  password: "otherpass"
)

Spot.destroy_all
s1 = Spot.create(
  host_id: guestuser.id,
  lat: -16.467138,
  lng: -151.750323,
  name: "north island spot",
  description: "a pretty sweet spot",
  bedrooms: 5,
  beds: 8,
  roomtype: "whole",
  price: 200,
  guests: 10
)
s2 = Spot.create(
  host_id: otheruser.id,
  lat: -16.496932,
  lng: -151.741740,
  name: "middle island spot",
  description: "the middlest spot ever",
  bedrooms: 1,
  beds: 1,
  roomtype: "private",
  price: 50,
  guests: 2
)
s3 = Spot.create(
  host_id: otheruser.id,
  lat: -16.533999,
  lng: -151.738202,
  name: "south island spot",
  description: "lets go south",
  bedrooms: 4,
  beds: 5,
  roomtype: "shared",
  price: 100,
  guests: 5
)

s1.image = File.open('app/assets/images/bora1.jpg')
s1.save!
s2.image = File.open('app/assets/images/bora2.jpg')
s2.save!
s3.image = File.open('app/assets/images/bora3.jpg')
s3.save!
