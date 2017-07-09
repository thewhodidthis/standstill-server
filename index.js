'use strict';

// Helps report differences
var bipolar = function () {
  var prev = [], len = arguments.length;
  while ( len-- ) prev[ len ] = arguments[ len ];

  // Reset
  var memo = prev;

  return function () {
    var next = [], len = arguments.length;
    while ( len-- ) next[ len ] = arguments[ len ];

    // Calculate deltas
    var diff = memo.map(function (v, i) { return next[i] - v; });

    // Save for later
    memo = next;

    // Array of deltas
    return diff
  }
};

module.exports = bipolar;

