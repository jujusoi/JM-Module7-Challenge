// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.QuestionTitle}

## Description

${data.QuestionDescription.replace(/\|/g,"\n\n")}

## Installation

${data.QuestionInstall.replace(/\|/g,"\n\n")}

## Usage

${data.QuestionUsage.replace(/\|/g,"\n\n")}
`;
}

function generateUsageFiles(data) {
  let result = '';
  for (let obj of data) {
    result += `
![${obj.QuestionUsagePathName}](${obj.QuestionUsagePath})
    `
  }
  return result;
}

function generateCrednLic(data) {
  return `
## Features

${data.QuestionFeatures.replace(/\|/g,"\n\n")}

## Credits

${data.QuestionCredits.replace(/\|/g,"\n\n")}

## License

${data.QuestionLicense.replace(/\|/g,"\n\n")}

## Links

${data.QuestionLinks.replace(/\|/g,"\n\n")}
  `
}

module.exports = {
  generateMarkdown,
  generateUsageFiles,
  generateCrednLic,
};
