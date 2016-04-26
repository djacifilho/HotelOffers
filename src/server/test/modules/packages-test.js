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
				res.status.should.equal(200);
				done();
			});
	  });

	  it("/api/packages/:id should return json, id: 0",function(done){
		server
			.get("/api/packages/0")
			.expect("Content-type", /json/)
			.expect(200) // THis is HTTP response
			.end(function(err,res){
				res.status.should.equal(200);
				res.body._id.should.equal(0);

				done();
			});
	  });


	var invalidInputs = ["a", -1, -10, "bbbbb"]

	function testPackageInvalidParameter(id, done) {
		 server
			 .get("/api/packages/" + id)
			 .expect("Content-type", /json/)
			 .expect(200) // THis is HTTP response
			 .end(function(err,res){
				res.status.should.equal(200);
				res.body.should.be.empty();
				done();
			 });
	 }

	invalidInputs.forEach(function(id) {
		it("/api/packages/" + id + " - invalid paramter should return nothing", function(done) {
			testPackageInvalidParameter(id, done)
		});
	})



	});
}
