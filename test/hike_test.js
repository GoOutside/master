var expect = require('chai').expect,
  Hike = require('../model/hikes');

describe('Hike object tests', function() {
  var hike;

  beforeEach(function() {
    hike = new Hike('A test hike');
  });

  describe('constructor', function() {

    it('hike should be truthy (exists)', function() {
      expect(hike).to.be.ok;
    });

    it('hike should have title property', function() {
      expect(hike).to.have.property('title');
    });

    it('hike title property matches beforeEach', function() {
      expect(hike.title).to.equal('A test hike');
    });

  });
});