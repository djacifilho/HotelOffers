# HotelOffers




git clone https://github.com/djacifilho/HotelOffers.git
cd HotelOffers
mongod --dbpath /data --port 27107
mongoimport --port 27107 --db hotelOffers --collection tempoffer --file data/offer.json
mongo --port 27107 hotelOffers src/mongodb/loadData.js
