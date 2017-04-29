const test = require('tape');
const bipolar = require('../');

test('will return', (t) => {
  const tracker = bipolar();
  const results = tracker();

  t.equal(typeof tracker, 'function', 'returns a lamda on init');
  t.ok(Array.isArray(results), 'lamda returns an array on call');
  t.end();
});

test('will compute', (t) => {
  const x = 1;
  const y = 1;

  const tracker = bipolar(0, 0);
  const results = tracker(x, y);

  t.equal(x, x);
  t.equal(y, y);
  t.equal(results.length, 2, 'input/output length is a match');
  t.end();
});

