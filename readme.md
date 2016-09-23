## Bipolar
> Helps detect change

### Setup
```sh
# Install from github
npm install thewhodidthis/bipolar

# Try the example
node node_modules/@thewhodidthis/bipolar/example
```

### Usage
```js
const Filter = require('@thewhodidthis/bipolar');
const output = new Filter(100);

process.stdin.pipe(output).pipe(process.stdout);

output.on('data', function() {
  process.stdout.write('\n');
});

output.on('error', function _onOutputError(error) {
  console.error(error);
});
```
