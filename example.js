import bipolar from './index.mjs'

const filter = bipolar(0, 0)

// Log differences in position between clicks
document.addEventListener('click', ({ x, y }) => {
  console.log(filter(x, y))
})
