> Helps detect change

### Setup
```sh
# Fetch latest from github
npm install thewhodidthis/bipolar
```

### Usage
```js
import bipolar from 'bipolar'

const filter = bipolar(0, 0)

// Log differences in position between clicks
document.addEventListener('click', ({ x, y }) => {
    console.log(filter(x, y))
})
```
