#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const { camelize } = require('./lib/utils');
const { getMeyerReset, getNormalize } = require('./lib/css');

clear();

// eslint-disable-next-line
console.log(
  chalk.yellow(
    figlet.textSync('reset-css', { horizontalLayout: 'half' }),
  ),
);

if (files.exists('reset.css')) {
  // eslint-disable-next-line
  console.log(chalk.red('Woops! Looks like a reset.css file already exists here.\nDelete it to create a new one.'));
  process.exit();
}

const run = async () => {
  const { baseCSS } = await inquirer.askWhichCSSBase();
  const options = await inquirer.askForOptions(baseCSS);
  const userOptions = {};
  options.selected.forEach((option) => {
    userOptions[camelize(String(option))] = true;
  });
  let css = '';
  switch (baseCSS) {
    case 'Normalize':
      css = getNormalize(userOptions);
      break;
    default:
      css = getMeyerReset(userOptions);
      break;
  }
  files.makeCSS(css);
};
run();
