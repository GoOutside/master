var superagent = require('superagent');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
var app = require('../../app.js').app;

describe('Express REST API Server', function() {
  var id;

  //testing the POST function of the JSON API
  it('can successfully create a new hike', function(done) {
    //superagent.post('http://localhost:3000/api/v1/notes/')
    superagent.post('http://localhost:3000/users/')
      .send({
        body: 'a new note!'
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body._id).to.not.be.eql(null);
        expect(res.body.body).to.be.eql('a new note!');
        id = res.body._id;

        done();
      });
  });

  //testing the GET function of the JSON API
  it('can successfully get a hike', function(done) {
    //superagent.get('http://localhost:3000/api/v1/note/' + id)
    superagent.get('http://localhost:3000/users/' + id)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body._id).to.be.eql(id);
        expect(res.body.body).to.be.eql('a new note!');

        done();
      });
  });
/*
  it('can successfully update a note', function(done) {
    superagent.put('http://localhost:3000/api/v1/note/' + id)
      .send({
        body: 'an updated note'
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body._id).to.be.eql(id);
        expect(res.body.body).to.be.eql('an updated note');

        done();
      })
  });

  it('can successfully delete a note', function(done) {
    superagent.del('http://localhost:3000/api/v1/note/' + id)
      .end(function(err, res) {
        expect(err).to.eql(null);

        done();
      });
  });*/
});