'use strict';

const Transform = require('stream').Transform;

class Bipolar extends Transform {
  constructor(seed) {
    super(seed);

    this._store = parseFloat(seed, 10) || 0;
  }

  _transform(chunk, encoding, callback) {
    const input = parseFloat(chunk, 10);
    const delta = (input - this._store) * 0.01;

    this._store = input;

    callback(null, delta.toString());
  }
}

module.exports = Bipolar;
