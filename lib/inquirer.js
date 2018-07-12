const inquirer = require('inquirer');

const askWhichCSSBase = () => {
  const questions = [
    {
      type: 'list',
      name: 'baseCSS',
      message: 'Select a popular CSS reset to base yours on\n',
      choices: ['Eric Meyer CSS Reset (v2)', 'Normalize', 'Mini Reset'],
    },
  ];
  return inquirer.prompt(questions);
};

const askForOptions = (baseCSS) => {
  const optionChoices = {
    'Eric Meyer CSS Reset (v2)': ['box model', 'fonts', 'vertical align', 'html 5', 'line height', 'lists', 'quotes', 'tables'],
    'Mini Reset': ['box model', 'fonts', 'lists', 'tables', 'embedded elements'],
    Normalize: ['document', 'sections', 'grouping content', 'text semantics', 'embedded content', 'forms', 'interactive elements', 'misc'],
  };
  const questions = [
    {
      type: 'checkbox',
      name: 'selected',
      message: 'Choose what you want to reset\n',
      choices: optionChoices[baseCSS],
      validate(value) {
        return !!value.length;
      },
    },
  ];
  return inquirer.prompt(questions);
};

module.exports = {
  askWhichCSSBase,
  askForOptions,
};
