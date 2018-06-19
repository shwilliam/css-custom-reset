const fs = require('fs');

module.exports = {
  exists : (filePath) => {
    try {
      return fs.statSync(filePath);
    } catch (err) {
      return false;
    }
  }
};
