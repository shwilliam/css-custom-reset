#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const { camelize } = require('./lib/utils');
const { getMeyerReset, getMiniReset, getNormalize } = require('./lib/css');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('reset-css', { horizontalLayout: 'half' }),
  ),
);

if (files.exists('reset.css')) {
  console.log(chalk.red('Woops! Looks like a reset.css file already exists here.\nDelete it to create a new one.'));
  process.exit();
}

const run = async () => {
  const { baseCSS } = await inquirer.askWhichCSSBase();
  const options = await inquirer.askForOptions(baseCSS);
  const userOptions = {};
  options.selected.map((option) => {
    userOptions[camelize(String(option))] = true;
  });
  let css = '';
  switch (baseCSS) {
    case 'Mini Reset':
      css = getMiniReset(userOptions);
      break;
    case 'Normalize':
      css = getNormalize(userOptions);
      break;
    default:
      // 'Eric Meyer CSS Reset (v2)':
      css = getMeyerReset(userOptions);
      break;
  }
  files.makeCSS(css);
};
run();
