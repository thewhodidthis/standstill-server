'use strict'

const bender = require('./')

const random = (x = 100) => Math.floor(Math.random() * x) - (x * 0.5)
const filter = bender(100)

const repeat = setInterval((runner) => {
  const data = random()

  console.log('----')
  console.log(data)
  console.log(...runner(data))
}, 200, filter)

const cancel = (timer) => {
  clearInterval(timer)

  console.log('----')
}

console.log('Starting from 100, seed with random numbers, log deltas:')

setTimeout(cancel, 1000, repeat)
