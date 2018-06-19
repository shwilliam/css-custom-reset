const fs = require('fs');

module.exports = {
  makeCSS : (css) => {
    fs.writeFile("./reset.css", css, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("CSS reset saved!");
    }); 
  },
  exists : (filePath) => {
    try {
      return fs.statSync(filePath);
    } catch (err) {
      return false;
    }
  }
};
