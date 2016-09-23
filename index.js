var util = require('util');
var stream = require('stream');

var Transform = stream.Transform || require('readable-stream').Transform;

function Trending(seed) {
  if (!(this instanceof Trending)) {
    return new Trending(seed);
  }

  Transform.call(this, seed);

  this.value = parseInt(seed, 10) || 0;
}

util.inherits(Trending, Transform);

Trending.prototype._transform = function (chunk, encoding, cb) {
  var input = parseInt(chunk.toString(), 10);
  var delta = (input - this.value) / 100;

  this.value = input;
  this.push(delta.toString());

  cb();
};

module.exports = Trending;

