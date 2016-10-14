# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


guestuser = User.create(
  email: "guest@user.com",
  fname: "Guest",
  lname: "User",
  password: "guestpass"
)

hostuser= User.create(
  email: "host@user.com",
  fname: "Host",
  lname: "User",
  password: "hostpass"
)


bora1 = Spot.create(
  host_id: hostuser.id,
  lat: -16.489883,
  lng: -151.759108,
  name: "Beautiful island apartment",
  description: "A beautiful apartment, less than 5 minutes from the beach.  Everything you could need for your stay",
  beds: 8,
  roomtype: "whole",
  price: 172,
  guests: 10,
  kind: "apartment",
  address: "BP 123 Nunue",
  city: "Vaitape",
  country: "French Polynesia"
)
bora1.image = File.open('app/assets/images/bora1.jpg')
bora1.save!

bora2 = Spot.create(
  host_id: hostuser.id,
  lat: -16.528515,
  lng: -151.740837,
  name: "Private bungalow",
  description: "An exclusive, private bungalow.  Beautiful beach right behind the property",
  beds: 1,
  roomtype: "private",
  price: 99,
  guests: 2,
  kind: "beach bungalow",
  address: "1 Pofai Bay",
  city: "Vaitape",
  country: "French Polynesia"
)
bora2.image = File.open('app/assets/images/bora2.jpg')
bora2.save!

bora3 = Spot.create(
  host_id: hostuser.id,
  lat: -16.533999,
  lng: -151.738202,
  name: "The black pearl",
  description: "The blackest, pearliest beach house in Bora Bora.  Party here?",
  beds: 5,
  roomtype: "shared",
  price: 100,
  guests: 5,
  kind: "beach house",
  address: "1 Matira Rd",
  city: "Vaitape",
  country: "French Polynesia"
)

bora3.image = File.open('app/assets/images/bora3.jpg')
bora3.save!

hawaii1 = Spot.create(
  host_id: hostuser.id,
  lat: 21.290160,
  lng: -157.851695,
  name: "Luxury King Bedroom with Oceanside View",
  description: "This room has a grand bedroom with wall to wall windows.  The view is incredible",
  beds: 1,
  roomtype: "private",
  price: 124,
  guests: 2,
  kind: "apartment",
  address: "2 Ala Moana Park Drive",
  city: "Honolulu",
  country: "United States"
)

hawaii1.image = File.open('app/assets/images/hawaii1.jpg')
hawaii1.save!

hawaii2 = Spot.create(
  host_id: hostuser.id,
  lat: 21.307131,
  lng: -157.866092,
  name: "Surfer's Dream Home",
  description: "House is few houses from leeward side of diamond head volcano, house has small view of the ocean over buildings on Monsarrat. Very quite safe community in older neighborhood. Professional working couple, and roommate. 2 Bathroom, 1 shared with roommate...",
  beds: 3,
  roomtype: "whole",
  price: 200,
  guests: 5,
  kind: "beach house",
  address: "155 Ala Moana Blvd",
  city: "Honolulu",
  country: "United States"
)

hawaii2.image = File.open('app/assets/images/hawaii2.jpg')
hawaii2.save!

hawaii3 = Spot.create(
  host_id: hostuser.id,
  lat: 21.263902,
  lng: -157.821766,
  name: "Large Kahala Studio Ocean View Central Location!",
  description: "Aloha! This private attached studio offers breathtaking ocean views from the comfort of your bed. Perfectly located in between Waikiki and Hanauma Bay, we are minutes from Kahala Mall, multiple grocery stores, Diamond Head Crater, and world renowned beaches. Avoid the hassle of Waikiki parking with a free spot available for you 10 steps from the door. Aloha and mahalo nui loa.",
  beds: 4,
  roomtype: "whole",
  price: 350,
  guests: 5,
  kind: "beach house",
  address: "2815 Kalakaua Ave",
  city: "Honolulu",
  country: "United States"
)

hawaii3.image = File.open('app/assets/images/hawaii3.jpg')
hawaii3.save!

seych1 = Spot.create(
  host_id: hostuser.id,
  lat: -4.680251,
  lng: 55.525420,
  name: "Garden cottage on stunning property",
  description: "Fully serviced 1 bedroom cottage in one of the most beautiful regions of Mahe. Close to beaches, 5 star hotels, shops, bus stops & restaurants. You'll love the coziness, fully equipped kitchenette, king size bed & modern bathroom & shower. The property is in a very peaceful location with landscaped gardens, swimming pool and entertainment area & stunning views. Our place is great for couples and the property is safe and secure, has private parking & is set on 5000sqm of lush tropical gardens.",
  beds: 1,
  roomtype: "private",
  price: 137,
  guests: 2,
  kind: "beach house",
  address: "10 East Coast Road",
  city: "Victoria",
  country: "Seychelles"
)

seych1.image = File.open('app/assets/images/seych1.jpg')
seych1.save!

seych2 = Spot.create(
  host_id: hostuser.id,
  lat: -4.680251,
  lng: 55.525420,
  name: "Beautiful Sea View Studio",
  description: "This is a lovely, light and airy studio apartment situated in a wonderful lush green area in the picturesque north of Mahe. It has everything you need for an incredibly comfortable stay and is within 15 minutes drive to Victoria and Beau Vallon!",
  beds: 3,
  roomtype: "whole",
  price: 83,
  guests: 3,
  kind: "beach bungalow",
  address: "155 East Coast Road",
  city: "Point Au Sel",
  country: "Seychelles"
)

seych2.image = File.open('app/assets/images/seych2.jpg')
seych2.save!

seych3 = Spot.create(
  host_id: hostuser.id,
  lat: -4.683646,
  lng: 55.454295,
  name: "Veuve Noire Beach Hut",
  description: "Veuve Noire is the perfect getaway on Praslin were you will find youself surrounded by lush tropical forests and granitic rocks. Wake up on the hut’s veranda with birds singing away, cook enjoying the view of the ocean, dip in the relaxing pool and have a shower under the stars!",
  beds: 3,
  roomtype: "whole",
  price: 199,
  guests: 3,
  kind: "beach bungalow",
  address: "15 West Coast Road",
  city: "Victoria",
  country: "Seychelles"
)

seych3.image = File.open('app/assets/images/seych3.jpg')
seych3.save!
