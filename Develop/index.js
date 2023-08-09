// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMd = require('./utils/generateMarkdown');
const { error } = require('console');
let usageArray = [];
// TODO: Create an array of questions for user input
const questions = ["Enter your project title", "Provide a description of your project", "Enter installation instructions", "Provide instructions and examples for use", "Any screenshots/videos to accompany use instructions?", "Alt description for file:", "Provide a path to your file", "Any additional files?", "Any Contribution guidelines for other developers?", "Input license type:", "What are some of your Project's features?", "External links:", "Any tests for your application? Provide examples on how to run them:", "Enter your github username (no link):", "Enter your email address:"];
const [qTitle, qDesc, qInstall, qUsage, qUsageCon, qUsagePathName, qUsagePath, qUsagePathCon, qCredits, qLicense, qFeatures, qLinks, qTests, qGithub, qEmail] = questions;
const choices = [
    'Apache License 2.0',
    'GNU General Public License v3.0',
    'MIT License',
    'BSD 2-Clause "Simplified" License',
    'BSD 3-Clause "New" or "Revised" License',
    'Boost Software License 1.0',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU Lesser General Public License v2.1',
    'Mozilla Public License 2.0',
    'The Unlicense'
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("README written!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
    { type: 'input', message: qTitle, name: 'QuestionTitle' },
    { type: 'input', message: qDesc, name: 'QuestionDescription' },
    { type: 'input', message: qInstall, name: 'QuestionInstall' },
    { type: 'input', message: qUsage, name: 'QuestionUsage' },
    { type: 'confirm', message: qUsageCon, name: 'QuestionUsageCon' },
])
    .then((response) => {
        const md = genMd.generateMarkdown(response);
        if (response.QuestionUsageCon === true) {
            initUsageStuff(response);
        } else {

        }
    }
    )}

function initUsageStuff(firstResponse) {
    inquirer.prompt([
        {type: 'input', message: qUsagePathName, name: 'QuestionUsagePathName'},
        {type: 'input', message: qUsagePath, name: 'QuestionUsagePath'},
        {type: 'confirm', message: qUsagePathCon, name: 'QuestionUsagePathCon'},
    ])
    .then((response) => {
        if (response.QuestionUsagePathCon === true) {
            usageArray = usageArray.concat(response);
            initUsageStuff(firstResponse);
        } else {
            usageArray = usageArray.concat(response);
            initCredLicense(firstResponse, usageArray);
        }
    })
}

function initCredLicense(firstResponse, secondResponse) {
    inquirer.prompt([
        {type: 'input', message: qFeatures, name: 'QuestionFeatures'},
        {type: 'input', message: qCredits, name: 'QuestionCredits'},
        {type: 'input', message: qTests, name: 'QuestionTests'},
        {type: 'input', message: qGithub, name: 'QuestionGithub'},
        {type: 'input', message: qEmail, name: 'QuestionEmail'},
        {type: 'list', message: qLicense, name: 'QuestionLicense', choices: choices},
    ])
    .then((response) => {
        firstResponse.QuestionLicense = response.QuestionLicense;
        const md = genMd.generateMarkdown(firstResponse);
        const md2 = genMd.generateUsageFiles(secondResponse);
        const md3 = genMd.generateCrednLic(response);
        writeToFile('README.md', `${md}${md2}${md3}`);
    })
}
// Function call to initialize app
console.log(`For multi line input, use | before the text you want to appear on the next line. For example:
This project is |amazing!
Output: 
This project is
amazing! `);
init();
