const inquirer = require('inquirer');

const askWhichCSSBase = () => {
  const questions = [
    {
      type: 'list',
      name: 'baseCSS',
      message: 'Select a popular CSS reset to base yours on\n',
      choices: ['Eric Meyer CSS Reset (v2)', 'Normalize', 'Mini Reset'],
    }
  ];
  return inquirer.prompt(questions);
};

const askForOptions = (baseCSS) => {
  let optionChoices = [];
  switch(baseCSS) {
    case 'Eric Meyer CSS Reset (v2)':
        optionChoices = ['box model', 'fonts', 'vertical align', 'html 5', 'line height', 'lists', 'quotes', 'tables'];
        break;
    case 'Normalize':
        optionChoices = ['document', 'sections', 'grouping content', 'text semantics', 'embedded content', 'forms', 'interactive elements', 'misc'];
        break;
    case 'Mini Reset':
        optionChoices = ['box model', 'fonts', 'lists', 'tables', 'embedded elements'];
        break;
  }
  const questions = [
    {
      type: 'checkbox',
      name: 'selected',
      message: 'Choose what you want to reset\n',
      choices: optionChoices,
      validate: function(value) {
        return value.length ? true : false;
      },
    }
  ];
  return inquirer.prompt(questions);
};
  
module.exports = {
  askWhichCSSBase,
  askForOptions
};
