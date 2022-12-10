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
    validate: (value)=>{if (value){return true}else {return "Please select a license to continue"}},
},
{
    type: 'list',
    message: 'Choose a Github license',
    name: 'license',
    choices: ['apache license 2.0', 'Do What The F*ck You Want To Public License', 'Open Software License 3.0'],
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

* [Project Description] ${response.description}
* [Installation Info] ${response.install}
* [Usage Info] ${response.usage}
* [Contributing Guidelines] ${response.guidelines}
* [Test Instructions] ${response.tests}

## License
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




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
