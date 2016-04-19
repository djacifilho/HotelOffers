var supertest = require("supertest");
var should = require("should");


var server = supertest.agent("http://localhost:3000");


module.exports.run = function(server) {

	describe("Package API",function(){

	  it("/api/packages should return json",function(done){

		server
			.get("/api/packages")
			.expect("Content-type", /json/)
			.expect(200) // THis is HTTP response
			.end(function(err,res){

				// HTTP status should be 200
				res.status.should.equal(200);

				done();
			});
	  });

	  it("/api/packages/id should return json",function(done){

		server
			.get("/api/packages/0")
			.expect("Content-type", /json/)
			.expect(200) // THis is HTTP response
			.end(function(err,res){

				// HTTP status should be 200
				res.status.should.equal(200);

				done();
			});
	  });

	});
}
