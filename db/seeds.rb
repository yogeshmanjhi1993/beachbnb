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

puerto1 = Spot.create(
  host_id: hostuser.id,
  lat: 18.486754,
  lng: -66.413710,
  name: "Culebra Beach Flamenco Beach House",
  description: "The apartment located (3rd floor level) in our building has 2 bedrooms, living room, A/C, satellite-TV and fully equipped kitchen-dinning areas. Free parking at our facility. My place is close to the airport (3 minutes car distance) and great views. You’ll love my place because of the location, the ambiance, the outdoors space, and the people. My place is good for couples, solo adventurers, families (with kids), and big groups.",
  beds: 3,
  roomtype: "whole",
  price: 55,
  guests: 3,
  kind: "beach bungalow",
  address: "107 Vega Baja Blvd",
  city: "Vega Baja",
  country: "Puerto Rico"
)

puerto1.image = File.open('app/assets/images/puerto1.jpg')
puerto1.save!

puerto2 = Spot.create(
  host_id: hostuser.id,
  lat: 18.468378,
  lng: -66.339593,
  name: "Oceanfront Penthouse Casa Blanca",
  description: "Large 2 bed/1.5 bath fourth story oceanfront Penthouse. Kitchen has coffee maker, stove, microwave, fridge, freezer. Large wrap around balcony includes hammock, king bed, and tables. One queen bed, one full bed. Hi-Speed Wifi, AC in bedrooms",
  beds: 1,
  roomtype: "private",
  price: 109,
  guests: 2,
  kind: "apartment",
  address: "11 Calle 4",
  city: "Dorado",
  country: "Puerto Rico"
)

puerto2.image = File.open('app/assets/images/puerto2.jpg')
puerto2.save!

thai1 = Spot.create(
  host_id: hostuser.id,
  lat: 13.539306,
  lng: 100.623201,
  name: "Koh Samui, The Bay, Luxury",
  description: "This 1 bedroom at 102 Sq m is the largest in The Bay compared to other advertised small studios. It boasts a huge twin balcony with amazing views, King size bedroom, kitchen and lounge. Within 5- 10 mins of the best beaches and bars in Samui.",
  beds: 1,
  roomtype: "private",
  price: 225,
  guests: 2,
  kind: "apartment",
  address: "296 Sukhumvit Rd",
  city: "Samut Prakan",
  country: "Thailand"
)

thai1.image = File.open('app/assets/images/thai1.jpg')
thai1.save!

thai2 = Spot.create(
  host_id: hostuser.id,
  lat: 13.549858,
  lng: 100.527092,
  name: "Beach apartment with private pool!",
  description: "Perfect location with private pool.",
  beds: 3,
  roomtype: "whole",
  price: 400,
  guests: 2,
  kind: "apartment",
  address: "10002 Sukhumvit Rd",
  city: "Samut Prakan",
  country: "Thailand"
)

thai2.image = File.open('app/assets/images/thai2.jpg')
thai2.save!

mexico1 = Spot.create(
  host_id: hostuser.id,
  lat: 21.256244,
  lng: -86.810389,
  name: "Great B&B in the Cancun Hotel Zone!",
  description: "Gorgeous, comfortable and big bedroom, has a King Size bed. The room has its own private bathroom with shower, tub and a balcony. Also In the bedroom is a dressing room with plenty of storage space.",
  beds: 1,
  roomtype: "private",
  price: 197,
  guests: 2,
  kind: "apartment",
  address: "104 Calle Vialidad Paseo Mujeres",
  city: "Cancun",
  country: "Mexico"
)

mexico1.image = File.open('app/assets/images/mexico1.jpg')
mexico1.save!

mexico2 = Spot.create(
  host_id: hostuser.id,
  lat: 21.148766,
  lng: -86.792250,
  name: "Habitación en Zona Hotelera Cancún",
  description: "Cómoda habitación con una hermosa vista a la laguna y el campo de golf, ubicada en el KM 8 de la Zona Hotelera, excelente ubicación a 10 min. de la playa y Party Center, supermercado y centros comerciales. Cuenta con A/C, Wifi, baño privado (adjunto).",
  beds: 1,
  roomtype: "shared",
  price: 35,
  guests: 1,
  kind: "beach bungalow",
  address: "47 Blvd Kukulkan",
  city: "Cancun",
  country: "Mexico"
)

mexico2.image = File.open('app/assets/images/mexico2.jpg')
mexico2.save!

bali1 = Spot.create(
  host_id: hostuser.id,
  lat: -8.836851,
  lng: 115.102395,
  name: "BEACHFRONT BUNGALOWS: LEMBONGAN",
  description: "Ketut Bungalows are located on the beachfront of Jungutbatu Beach on the the paradise Island of Nusa Lembongan. Nusa Lembongan Island is a 30 minute fast boat trip from the mainland of Bali, Indonesia. We are a local Balinese family who look forward to welcoming you to experience the culture and diversity our Island can offer. We have individual bungalows to suit your needs and a magic infinity pool to enjoy our spectacular sunsets. Surfing , snorkelling, diving, restaurants, its all here!",
  beds: 5,
  roomtype: "whole",
  price: 201,
  guests: 8,
  kind: "beach bungalow",
  address: "508 Jalan Raya Uluwatu Pecatu",
  city: "Bali",
  country: "Indonesia"
)

bali1.image = File.open('app/assets/images/bali1.jpg')
bali1.save!

bali2 = Spot.create(
  host_id: hostuser.id,
  lat: -8.702453,
  lng: 115.265029,
  name: "Villa Kamran - Room Kasiope",
  description: "The Kamran Villa is a 600 m2 luxurious property, with a 5x11m infinity pool located 250m from the beach. ",
  beds: 2,
  roomtype: "private",
  price: 135,
  guests: 3,
  kind: "beach house",
  address: "3 JL Setapak",
  city: "Bali",
  country: "Indonesia"
)

bali2.image = File.open('app/assets/images/bali2.jpg')
bali2.save!

maldives1 = Spot.create(
  host_id: hostuser.id,
  lat: -0.699692,
  lng: 73.162078,
  name: "Deluxe room for Holiday",
  description: "My place is close to the beach, family-friendly activities, public transport, and the airport. You’ll love my place because of the outdoors space, the neighborhood, the light, and the comfy bed. My place is good for couples and solo adventurers.",
  beds: 1,
  roomtype: "whole",
  price: 99,
  guests: 2,
  kind: "beach bungalow",
  address: "15 A4",
  city: "Gan Addu City",
  country: "Maldives"
)

maldives1.image = File.open('app/assets/images/maldives1.jpg')
maldives1.save!

maldives2 = Spot.create(
  host_id: hostuser.id,
  lat: -0.612620,
  lng: 73.225697,
  name: "Coconut Tree Hulhuvilla Beach",
  description: "Coconut Tree Hulhuvilla Beach is the first Eco friendly hotel in Hulhumale’, located at the beach front area. It’s 10 minutes drive from Ibrahim Nasir International Airport. Our Luxury Boutique Hotel is ideal for guests looking for a comfortable stay",
  beds: 3,
  roomtype: "private",
  price: 205,
  guests: 3,
  kind: "beach house",
  address: "47 Addu City Rd",
  city: "Addu City",
  country: "Maldives"
)

maldives2.image = File.open('app/assets/images/maldives2.jpg')
maldives2.save!

fiji1 = Spot.create(
  host_id: hostuser.id,
  lat: -17.743498,
  lng: 178.023310,
  name: "Beautiful Beach House with Pool",
  description: "Hello! Welcome to Nadi, Fiji! This property is close to Bus stop going to BEACH and everywhere else, restaurants and cafes, 24-hour supermarket, airport, gym, great views, and hiking trials. It's located in a safe and affluent neighborhood. You’ll love my place because of the coziness, the views, the kitchen, BIG swimming pool, privacy, the comfy bed, family friendly. My place is good for couples, solo adventurers, business travelers, families (with kids), big groups!!!",
  beds: 3,
  roomtype: "whole",
  price: 400,
  guests: 3,
  kind: "beach house",
  address: "234 Nadi Rd",
  city: "Nadi",
  country: "Fiji"
)

fiji1.image = File.open('app/assets/images/fiji1.jpg')
fiji1.save!

fiji2 = Spot.create(
  host_id: hostuser.id,
  lat: -17.914139,
  lng: 177.863266,
  name: "Aquarius On The Beach",
  description: "Our small, very personal hotel caters for those who want to enjoy staying at a beachfront location, but have all the amenities of privacy, a good restaurant, bar and activities - all within one property. Oh, and of course, all at a good value.",
  beds: 2,
  roomtype: "private",
  price: 400,
  guests: 3,
  kind: "beach bungalow",
  address: "2344 Nadi Rd",
  city: "Nadi",
  country: "Fiji"
)

fiji2.image = File.open('app/assets/images/fiji2.jpg')
fiji2.save!

cayman1 = Spot.create(
  host_id: hostuser.id,
  lat: 19.351786,
  lng: -81.210496,
  name: "Coco Beach Villas #1 (Ocean Front View)",
  description: "My place is on a peaceful beach, with restaurants, dining, art and culture. You’ll love my place because of the outdoor space, the comfy beds, the kitchen. My place is great for couples, solo adventurers, business travelers, and families (with kids).",
  beds: 2,
  roomtype: "private",
  price: 197,
  guests: 3,
  kind: "beach bungalow",
  address: "25 North Side Rd",
  city: "Grand Cayman",
  country: "Cayman Islands"
)

cayman1.image = File.open('app/assets/images/cayman1.jpg')
cayman1.save!

cayman2 = Spot.create(
  host_id: hostuser.id,
  lat: 19.294053,
  lng: -81.224725,
  name: "2 Bed beach front apartment",
  description: "If you are seeking relaxation or a perfect romantic getaway, this two bedroom, two bathroom ocean front condo truly is a piece of paradise. Situated on a quiet cove with stunning private beach and stunning ocean views.",
  beds: 1,
  roomtype: "whole",
  price: 456,
  guests: 4,
  kind: "beach house",
  address: "252 Bodden Town Rd",
  city: "Grand Cayman",
  country: "Cayman Islands"
)

cayman2.image = File.open('app/assets/images/cayman2.jpg')
cayman2.save!
