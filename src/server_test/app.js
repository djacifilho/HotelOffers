var supertest = require("supertest"),
	app_test = require('./routes/app_test'),
	packages_test = require('./routes/packages_test')

var server = supertest.agent("http://localhost:3000");



app_test.run(server);
packages_test.run(server);
