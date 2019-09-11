const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/widget/runtime.js',
    './dist/widget/polyfills.js',
    './dist/widget/scripts.js',
    './dist/widget/main.js'
  ];

  await fs.ensureDir('widgetjs');
  await concat(files, 'widgetjs/mym-widget.js');
})();