// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is your Project Title?",
        type: "input"
    },
    {
        name: "description",
        message: "What is your Project Description?",
        type: "input"
    },
    {
        name: "installation",
        message: "What installations are required for this Project?",
        type: "input"
    },
    {
        name: "usage",
        message: "What technologies or languages were used for the making of this Project?",
        type: "input"
    },
    {
        name: "contribution",
        message: "Who are the contributors of this Project?",
        type: "input"
    },
    {
        name: "testing",
        message: "If applicable, explain the process of testing the application?",
        type: "input"
    },
    {
        name: "license",
        message: "Does this Project have a license?",
        type: "list",
        choices: ["MIT", "GPL 3.0", "APACHE 2.0", "BSD 3", "None"],
    },
    {
        name: "github",
        message: "What is your GitHub username?",
        type: "input"
    },
    {
        name: "email",
        message: "Enter your email address?",
        type: "input"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README.md File!");
        writeToFile("./README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
