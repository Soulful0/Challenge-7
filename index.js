// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  // {
  //   type: "input",
  //   message: "What would you like to title your project?",
  //   name: "title",
  // },
  // {
  //   type: "input",
  //   message: "Give a description of your project",
  //   name: "description",
  // },
  // {
  //   type: "input",
  //   message: "Provide a Table of Contents",
  //   name: "tos",
  // },
  // {
  //   type: "input",
  //   message: "Describe the installation.",
  //   name: "installation",
  // },
  // {
  //   type: "input",
  //   message: "Describe the usage information",
  //   name: "usageInformation",
  // },
  {
    type: "list",
    message: "What license would you like to use for your project?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  // {
  //   type: "input",
  //   message: "Contributing information",
  //   name: "contributing",
  // },
  // {
  //   type: "input",
  //   message: "Provide any tests",
  //   name: "tests",
  // },
  // {
  //   type: "input",
  //   message: "Other Questions",
  //   name: "questions",
  // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userAnswers) => {
    writeToFile("READEME.md", generateMarkdown({ ...userAnswers }));
  });
}

// Function call to initialize app
init();
