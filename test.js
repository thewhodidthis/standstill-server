'use strict'

const { equal, ok } = require('tapeless')
const bender = require('./')

const filter = bender()
const result = filter()

equal(typeof filter, 'function', 'returns lamda on init', 'will return')
ok(Array.isArray(result), 'lamda returns array on call')

const i = 1
const output = bender(0, i)(i, i)
const [x, y] = output

equal(x, 1, 'is up', 'will compute')
equal(y, 0, 'is down')
equal(output.length, 2, 'input/output length is a match')
