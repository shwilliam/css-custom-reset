const fs = require('fs');

module.exports = {
  makeCSS: (css) => {
    fs.writeFile('./reset.css', css, (err) => {
      if (err) {
        // eslint-disable-next-line
        console.log(err);
      }
      // eslint-disable-next-line
      console.log('CSS reset saved!');
    });
  },
  exists: (filePath) => {
    try {
      return fs.statSync(filePath);
    } catch (err) {
      return false;
    }
  },
};
