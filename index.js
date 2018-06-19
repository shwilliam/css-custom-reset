const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const {camelize} = require('./lib/utils');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('css reset', { horizontalLayout: 'half' })
  )
);

if (files.exists('reset.css')) {
  console.log(chalk.red('Woops! Looks like a reset.css file already exists here.'));
  process.exit();
}

const run = async () => {
  const {baseCSS} = await inquirer.askWhichCSSBase();
  const options = await inquirer.askForOptions();
  userOptions = {};
  options.selected.map(option => {
    userOptions[camelize(String(option))] = true;
  });
}
run();