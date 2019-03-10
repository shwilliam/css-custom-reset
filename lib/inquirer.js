const inquirer = require('inquirer');

const askWhichCSSBase = () => {
  const questions = [
    {
      type: 'list',
      name: 'baseCSS',
      message: 'Select a popular CSS reset to base yours on\n',
      choices: ['Eric Meyer CSS Reset', 'Normalize'],
    },
  ];
  return inquirer.prompt(questions);
};

const askForOptions = (baseCSS) => {
  const optionChoices = {
    'Eric Meyer CSS Reset': ['margins and padding', 'fonts', 'lists', 'quotes', 'tables'],
    Normalize: ['document', 'sections', 'grouping content', 'embedded content', 'forms', 'interactive', 'misc'],
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
