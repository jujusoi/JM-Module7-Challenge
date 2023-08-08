// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMd = require('./utils/generateMarkdown');
const { error } = require('console');
let usageArray = [];
let featureArray = [];
// TODO: Create an array of questions for user input
const questions = ["Enter your project title", "Provide a description of your project", "Enter installation instructions", "Provide instructions and examples for use", "Any screenshots/videos to accompany use instructions?", "Alt description for file:", "Provide a path to your file", "Any additional files?", "Input Credits: i.e. contributors, third-party-assets, tutorials", "Input license type:", "What are some of your Project's features?", "External links:", "Input another line?"];
const [qTitle, qDesc, qInstall, qUsage, qUsageCon, qUsagePathName, qUsagePath, qUsagePathCon, qCredits, qLicense, qFeatures, qLinks, qFeaturesCon] = questions;
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
            console.log(usageArray);
            console.log(firstResponse);
            initFeatureStuff(firstResponse, usageArray);
        }
    })
}

function initFeatureStuff(first, second) {
    inquirer.prompt([
        {type: 'input', message: qFeatures, name: 'QuestionFeatures'},
        {type: 'confirm', message: qFeaturesCon, name: 'QuestionFeaturesCon'},
    ])
    .then((response) => {
        if (response.QuestionFeaturesCon === true) {
            featureArray = featureArray.concat(response);
            initFeatureStuff(first, second);
        } else {
            featureArray = featureArray.concat(response);
            initCredLicense(first, second, featureArray);
        }
    })
}

function initCredLicense(firstResponse, secondResponse, thirdResponse) {
    inquirer.prompt([
        {type: 'input', message: qCredits, name: 'QuestionCredits'},
        {type: 'input', message: qLicense, name: 'QuestionLicense'},
        {type: 'input', message: qLinks, name: 'QuestionLinks'},
    ])
    .then((response) => {
        const md = genMd.generateMarkdown(firstResponse);
        const md2 = genMd.generateUsageFiles(secondResponse);
        const md3 = genMd.generateFeatures(thirdResponse);
        const md4 = genMd.generateCrednLic(response);
        writeToFile('README.md', `${md}${md2}${md3}${md4}`);
    })
}
// Function call to initialize app
init();
