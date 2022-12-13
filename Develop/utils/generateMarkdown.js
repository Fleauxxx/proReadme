// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=="no license") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=="no license") {
    return `[${license}]http://opensource.org/licenses/${license})`
  }
  return "";
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
  ## [License](#table-of-contents)
  This application has the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}
## Project Description - ${data.description}

## Table of Contents
* [Installation Info](#installation-info)
* [Usage Info](#usage-info)
* [Contributing Guidelines](#contributing-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)

${renderLicenseLink(data.license)}

## Installation Info - ${data.installation}

## Usage Info - ${data.usage}

${renderLicenseSection(data.license)}

## Contributing Guidelines - ${data.contributing}

## Test Instructions- ${data.tests}

## License
Github License: ${data.license}


## Questions
* Github Username: ${data.username}
* Email Address: ${data.email}`;
};

module.exports = generateMarkdown;


[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)