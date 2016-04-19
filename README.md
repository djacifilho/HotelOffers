# HotelOffers


*** Passos ***

>1. git clone https://github.com/djacifilho/HotelOffers.git
2. cd HotelOffers
3. mongod --dbpath /data --port 27107
4. mongoimport --port 27107 --db hotelOffers --collection tempoffer --file data/offer.json
5. mongo --port 27107 hotelOffers src/mongodb/loadData.js
6. cd src/server
7. npm install
