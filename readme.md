## about

Helps detect change.

## setup

Fetch the latest stable version from the _npm_ registry:

```sh
# Add to "dependencies"
npm install @thewhodidthis/bipolar
```

## usage

Instantiate with a pair of start values, then call repeatedly. For example,

```js
import bipolar from 'bipolar'

const filter = bipolar(0, 0)

// Log differences in position between clicks
document.addEventListener('click', ({ x, y }) => {
  console.log(filter(x, y))
})
```

## see also

- [bipolar-stream](https://github.com/thewhodidthis/bipolar-stream)
