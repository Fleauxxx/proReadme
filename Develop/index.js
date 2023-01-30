// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
  const markdown = generateMarkdown(response);

  // fs write file to right the user responses to a markdown file.
  fs.writeFile('readme.md', markdown, (error) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Markdown Generated")
    }
  });
});

