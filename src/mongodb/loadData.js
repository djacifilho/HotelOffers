db.packages.drop();

var cursor = db.tempoffer.aggregate([
	{ $unwind: "$tempOffers" },
	{ $project: { _id: 0, "tempOffers":1 }},
]);

cursor.forEach(
			function(doc) {
				db.packages.insert(doc.tempOffers);
			}
	);


db.tempoffer.drop();
