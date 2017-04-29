var bipolar = (function () {
  'use strict';

  // Helps track deltas
  var bipolar = function bipolar() {
    for (var _len = arguments.length, prev = Array(_len), _key = 0; _key < _len; _key++) {
      prev[_key] = arguments[_key];
    }

    var memo = prev;

    return function () {
      for (var _len2 = arguments.length, next = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        next[_key2] = arguments[_key2];
      }

      // Calculate deltas
      var diff = memo.map(function (v, i) {
        return next[i] - v;
      });

      // Replace
      memo = next;

      return diff;
    };
  };

  return bipolar;

}());
//# sourceMappingURL=bipolar.js.map
