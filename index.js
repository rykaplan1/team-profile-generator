//Imports
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const buildCard = require('./src/buildCard');
const generateHTML = require('./src/generateHTML');

//Global Variables
const continueCheck = {
  type: "list",
  name: "continue",
  message: "Would you like to add another employee?",
  choices: ["Yes", "No"]
}

const roleSelect = {
  type: "list",
  name: "role",
  message: "Please select your employee's role:",
  choices: ["Engineer", "Intern"]
};

const generalQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter a name:",
    validate: async (input) => {
      const splitInput = input.split(" ")
      for (const word of splitInput) {
        if (!/^[a-zA-Z]+$/.test(word)) {
          return "Please enter a name with only letters in it."
        }
      }
      return true;
    }
  },
  {
    type: "input",
    name: "id",
    message: "Please enter an id:",
    validate: async (input) => {
      if (!/^[0-9]+$/.test(input)) {
        return "Please enter a valid number."
      }
      return true;
    }
  },
  {
    type: "input",
    name: "email",
    message: "Please enter an email:",
    validate: async (input) => {
      if (!input.includes('@') || !input.includes('.')) {
        return "Please enter a valid email address."
      }
      return true;
    }
  }
];

const githubPrompt = {
  type: "input",
  name: "github",
  message: "Please enter your engineer's github account:"
}

const schoolPrompt = {
  type: "input",
  name: "school",
  message: "Please enter your intern's school:"
}

const officeNumberPrompt = {
  type: "input",
  name: "officeNumber",
  message: "Please enter your manager's office number:"
}

//Functions
async function buildManager() {
  const managerQuestions = [...generalQuestions, officeNumberPrompt];
  const data = await inquirer.prompt(managerQuestions);

  return new Manager(data.name, data.id, data.email, data.officeNumber);
}

async function buildEngineer() {
  const engineerQuestions = [...generalQuestions, githubPrompt];
  const data = await inquirer.prompt(engineerQuestions);

  return new Engineer(data.name, data.id, data.email, data.github);
}

async function buildIntern() {
  const internQuestions = [...generalQuestions, schoolPrompt];
  const data = await inquirer.prompt(internQuestions)

  return new Intern(data.name, data.id, data.email, data.school);
}

//Init Function
async function init() {
  const cards = [];
  console.log("Welcome to Team Builder! You'll start by entering the info for your manager.");
  const manager = await buildManager();
  cards.push(buildCard(manager));
  let doneAdding = false;
  while (!doneAdding) {
    const continueInput = await inquirer.prompt(continueCheck);
    if (continueInput.continue === "No") {
      doneAdding = true;
    } else {
      let employee;
      const employeeRole = await inquirer.prompt(roleSelect);

      if (employeeRole.role === "Engineer") {
        employee = await buildEngineer();
      } else if (employeeRole.role === "Intern") {
        employee = await buildIntern();
      }

      cards.push(buildCard(employee));
    }
  }

  fs.writeFile('./dist/index.html', generateHTML(cards), (err) => {
    if (err) throw err;
    console.log("Webpage generated.");
  });
}

init();