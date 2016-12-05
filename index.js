'use strict';

const Transform = require('stream').Transform;

class Bipolar extends Transform {
  constructor(seed) {
    super(seed);

    this.store = parseFloat(seed) || 0;
  }

  _transform(chunk, encoding, callback) {
    const input = parseFloat(chunk);
    const delta = (input - this.store) * 0.01;

    this.store = input;

    callback(null, delta.toString());
  }
}

module.exports = Bipolar;
