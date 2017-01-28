const Filter = require('../');
const output = new Filter(100);

const seed = setInterval(function seed(stream) {
  const seed = Math.floor(Math.random() * 100) - 50;

  console.log('\n----');
  console.log(seed);

  stream.write(seed.toString());
}, 200, output);

const stop = setTimeout(function stop() {
  console.log('\n----\n');

  output.end();

  clearInterval(seed);
}, 10 * 1000);

output.pipe(process.stdout);

output.on('error', function _onOutputError(error) {
  console.error(error);
});

