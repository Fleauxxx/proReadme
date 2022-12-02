// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const questions = [{
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
  },
  
  {
    type: 'input',
    message: 'Description',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation Info',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Usage Info',
    name: 'usage',
  
  },
  {
    type: 'input',
    message: 'Contribution Guidelines',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Test Instructions',
    name: 'testing',
},
{
    type: 'list',
    message: 'Choose a License',
    name: 'license',
    choices: ['apache license 2.0', 'Do What The F*ck You Want To Public License', 'Open Software License 3.0']
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
];

inquirer
  .prompt(questions
    
  )
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
