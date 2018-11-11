'use strict'

const { equal, ok } = require('tapeless')
const bender = require('./')

const filter = bender()
const result = filter()

equal
  .describe('returns lamda on init')
  .test(typeof filter, 'function')

ok
  .describe('lamda returns array on call', 'will return')
  .test(Array.isArray(result))

const i = 1
const output = bender(0, i)(i, i)
const [x, y] = output

equal
  .describe('is up')
  .test(x, 1)
  .describe('is down')
  .test(y, 0)
  .describe('input/output length is a match', 'will compute')
  .test(output.length, 2)
