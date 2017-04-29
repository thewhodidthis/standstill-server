## Bipolar
> Helps detect change

### Setup
```sh
# Install from github
npm install thewhodidthis/bipolar
```

### Usage
```js
import bipolar from 'bipolar';

const filter = bipolar(0, 0);

// Log differences in position between clicks
document.addEventListener('click', (e) => {
    console.log(filter(e.x, e.y));
}, false);
```
