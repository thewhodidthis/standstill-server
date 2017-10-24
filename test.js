'use strict'

const { equal, ok } = require('tapeless')
const bipolar = require('./')

const tracker = bipolar()
const results = tracker()

equal(typeof tracker, 'function', 'returns lamda on init', 'will return')
ok(Array.isArray(results), 'lamda returns array on call')

const i = 1
const output = bipolar(0, i)(i, i)
const [x, y] = output

equal(x, 1, 'is up', 'will compute')
equal(y, 0, 'is down')
equal(output.length, 2, 'input/output length is a match')
