var supertest = require("supertest");
var should = require("should");


var server = supertest.agent("http://localhost:3000");


module.exports.run = function(server) {

	describe("Pages  - should return Page",function(){

	  it("index",function(done){

		server
			.get("/")
			.expect("Content-type", "text/html; charset=UTF-8")
			.expect(200) // THis is HTTP response
			.end(function(err,res){

				// HTTP status should be 200
				res.status.should.equal(200);

				done();
			});
	  });

	  it("cars",function(done){

		server
			.get("/#/cars")
			.expect("Content-type", "text/html; charset=UTF-8")
			.expect(200) // THis is HTTP response
			.end(function(err,res){

				// HTTP status should be 200
				res.status.should.equal(200);

				done();
			});
	  });

	  it("flights",function(done){

		server
			.get("/#/flights")
			.expect("Content-type", "text/html; charset=UTF-8")
			.expect(200) // THis is HTTP response
			.end(function(err,res){

				// HTTP status should be 200
				res.status.should.equal(200);

				done();
			});
	  });

	  it("hotels",function(done){

		server
			.get("/#/hotels")
			.expect("Content-type", "text/html; charset=UTF-8")
			.expect(200) // THis is HTTP response
			.end(function(err,res){

				// HTTP status should be 200
				res.status.should.equal(200);

				done();
			});
	  });

	  it("packages",function(done){

		server
			.get("/#/packages")
			.expect("Content-type", "text/html; charset=UTF-8")
			.expect(200) // THis is HTTP response
			.end(function(err,res){

				// HTTP status should be 200
				res.status.should.equal(200);

				done();
			});
	  });

	  it("packages/id",function(done){

		server
			.get("/#/packages/0")
			.expect("Content-type", "text/html; charset=UTF-8")
			.expect(200) // THis is HTTP response
			.end(function(err,res){

				// HTTP status should be 200
				res.status.should.equal(200);

				done();
			});
	  });

	});
}
