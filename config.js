const args = process.argv;

const fs = require('fs');
const read = require('read-yaml');
const config = read.sync('config.yml');

let configStr = '';
let publicPath = '';
if (args[2] === 'production') {
  configStr = JSON.stringify(config.production);
  publicPath = config.production.publicPath;
} else {
  configStr = JSON.stringify(config.development);
  publicPath = config.development.publicPath;
}

const result = `const config = ${configStr};\nexport default config;`;

fs.writeFile('./src/config.js', result, 'utf8', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Finished');
  return true;
});