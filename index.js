'use strict';

// Helps report differences
var bipolar = function bipolar() {
  for (var _len = arguments.length, prev = Array(_len), _key = 0; _key < _len; _key++) {
    prev[_key] = arguments[_key];
  }

  // Reset
  var memo = prev;

  return function () {
    for (var _len2 = arguments.length, next = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      next[_key2] = arguments[_key2];
    }

    // Calculate deltas
    var diff = memo.map(function (v, i) {
      return next[i] - v;
    });

    // Save for later
    memo = next;

    // Array of deltas
    return diff;
  };
};

module.exports = bipolar;
