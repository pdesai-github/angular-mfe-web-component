const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/cchi-web-component/runtime.js',
    './dist/cchi-web-component/polyfills.js',    
    './dist/cchi-web-component/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/cchi-web-component.js');
})();