var util = require('util');
var stream = require('stream');

var Bipolar = stream.Transform;

function Bipolar(seed) {
  if (!(this instanceof Bipolar)) {
    return new Bipolar(seed);
  }

  Transform.call(this, seed);

  this.value = parseInt(seed, 10) || 0;
}

util.inherits(Bipolar, Transform);

Bipolar.prototype._transform = function (chunk, encoding, cb) {
  var input = parseInt(chunk.toString(), 10);
  var delta = (input - this.value) * 0.01;

  this.value = input;
  this.push(delta.toString());

  cb(delta);
};

module.exports = Bipolar;

