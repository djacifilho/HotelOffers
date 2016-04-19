
module.exports = {
	config: function (express, app, bodyparser, db) {

		var packageRouter = express.Router();
		packageRouter.use(bodyparser.json());
		packageRouter.route('/packages');

		console.log('routes/packages.config')

		packageRouter
			.route('/')
			.get(function(req, res, next) {
				var cursor = db.collection('packages').find();

				var pkgs = [];
				cursor.forEach(
					function(doc) { pkgs.push(doc) },
					function(err) { res.send(pkgs) }
				);
			});

		packageRouter
			.route('/:_id')
			.get(function(req, res, next) {
				console.log(req.params);

				var id = parseInt(req.params._id);
				var cursor = db.collection('packages').find({ _id: id});

				var pkg = null;
				cursor.forEach(
					function(doc) { pkg = doc; },
					function(err) { res.send(pkg); }
				);
			});

		app.use('/api/packages', packageRouter);
	}
};
