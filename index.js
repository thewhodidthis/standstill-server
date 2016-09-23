var util = require('util');
var Transform = require('stream').Transform;

function Bipolar(seed) {
  if (this instanceof Bipolar === false) {
    return new Bipolar(seed);
  }

  Transform.call(this, seed);

  this.value = parseInt(seed, 10) || 0;
}

util.inherits(Bipolar, Transform);

Bipolar.prototype._transform = function (chunk, encoding, callback) {
  var input = parseInt(chunk, 10);
  var delta = (input - this.value) * 0.01;

  this.value = input;

  callback(null, delta.toString());
};

module.exports = Bipolar;

