// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
        validate: (projectTitleInput) => {
            (projectTitleInput) ? true : console.log('Please enter a project title')
        }
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of the project here:",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What are the test instructions?",
    },
    {
        type: "list",
        name: "license",
        message: "What is the license for your application?",
        choices: [
            "MIT",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "Boost Software License",
            "The Unilicense"
        ]
    },
    {
        type: "input",
        name: "githubName",
        message: "What is your github user name?",
    },
    {
        type: "input",
        name: "emailAdress",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

