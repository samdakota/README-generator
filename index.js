const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./develop/utils/generateMarkdowns');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        // validate: (projectTitleInput) => {
        //     (projectTitleInput) ? true : console.log('Please enter a project title')
        // }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project:",
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
            "GNU",
            "Apache",
            // "None"
        ]
    },
    {
        type: "input",
        name: "githubName",
        message: "What is your github user name?",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('README file created!')
        );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
           writeToFile('README.md', answers)
        })
        .catch(err => {
            console.log(err);
        })
    };

// Function call to initialize app
init()
