#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

console.log(chalk.bgBlueBright('Hello World!!!'));

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Who wants to be a Millionaire? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    }
  });
  playerName = answers.player_name;
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer....').start();
  await sleep();

  if(isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. Good job`});
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!`});
    process.exit(1);
  }
}

function winner() {
  console.clear();
  figlet(`Congrats, ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `You did it!!!!!!!!!!!!!!!`
      )
    );
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Who is the capital of Nepal?\n',
    choices: [
      'Mumbai',
      'London',
      'Kathmandu',
      'Paris'
    ]
  });

  return handleAnswer(answers.question_1 === 'Kathmandu');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'Who is the capital of Republic of the Congo?\n',
    choices: [
      'Mumbai',
      'Kinshasa',
      'Cairo',
      'Paris'
    ]
  });

  return handleAnswer(answers.question_2 === 'Kinshasa');
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
winner();