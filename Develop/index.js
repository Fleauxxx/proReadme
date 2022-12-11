// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
.prompt([
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
  },
  
  {
    type: 'input',
    message: 'Give a description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Is there any installation info',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What is the usage info',
    name: 'usage',
  
  },
  {
    type: 'input',
    message: 'Are there any contribution guidelines',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Are there any test instructions',
    name: 'tests',
},
{
    type: 'list',
    message: 'Choose a Github license',
    name: 'license',
    choices: ['apache license 2.0', 'The Unlicense', 'The MIT License', "None"],
    // validate: (value)=>{if (value){return true}else {return "Please select a license to continue"}},
},
{
    type: 'input',
    message: 'Enter you Github username',
    name: 'username',
},
{
    type: 'input',
    message: 'Enter your email address',
    name: 'email',
},
])
//.then function that takes user input and puts it in a variable that uses a template literal
// so i can pass it as my second argument in my fs.writefile
.then((response) => {
console.log("USER ANSWERS", response);
const userAnswers = `# ${response.title}

# Project Description - ${response.description}

# Table of Contents
1. [Installation Info](#Installation-Info)
2. [Usage Info](#Usage-Info)
3. [Contributing Guidelines](#Contributing-Guidelines)
4. [Test Instructions](#Test-Instructions)
5. [License](#License)
6. [Questions](#Questions)

# Installation Info - ${response.installation}

# Usage Info - ${response.usage}

# Contributing Guidelines - ${response.contributing}

# Test Instructions- ${response.tests}

# License
Github License: ${response.license}


# Questions
* Github Username: ${response.username}
* Email Address: ${response.email}`
// fs write file to right the user responses to a markdown file.
fs.writeFile('readme.md', userAnswers, (error) => {
if (error) {
  console.log("Error:", error);
} else {
  console.log("Markdown Generated")
}
});
});

function renderLicenseBadge(license) {
  if (license !=="None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};

function renderLicenseLink(license) {
  if (license !=="None") {
    return `http://opensource.org/licenses/${license})`
  }
  return "";
};

// function renderLicenseSection(license) {
//   if (license !=="None") {
//     return `#license`
//   }
// }



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

