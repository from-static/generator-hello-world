const fs = require('fs');

console.log('@from-static/generator-hello-world: Configuring "out" directory.')
try {
  fs.rmSync('./out', { recursive: true });
} catch (_e) {}

fs.mkdirSync('./out');

let _STATIC = {};

try {
  console.log('@from-static/generator-hello-world: Reading "static.json" file.')
  _STATIC = require('./static.json');
} catch (e) {
  console.log('@from-static/generator-hello-world: Error reading "static.json" file.');
}

fs.writeFileSync('./out/index.html', _STATIC?.data?.attributes?.message || '');

console.log('@from-static/generator-hello-world: Done!')