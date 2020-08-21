const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//function that can creat array of questions
 const  promptUser = () => {
    return inquirer.prompt([
        {
        type: "input",
        message: "what is the name of your project",
        name: "title"
        },
        {
            type: "input",
            message: "write the description of your project",
            name: "description"
        },
        {
            type: "input",
            message: "how would you like your application to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "who is the contributor of this project",
            name: "contributor"
        },
        {
           type: "input",
           message: "what are the test instgructions?",
           name: "test" 
        },
        {
            type: "checkbox",
            message: "select a license",
            choices: [
                "MIT",
                "ISC",
                "GNU GPLv3",
                "Apache"
            ],
            name: "license"
        },
        {
            type: "Input",
            message: "whose credit is this work?",
            name: "credit"
        },
        {
            type: "input",
            message: "write your github username",
            name: "username"
        },
        {
            type: "input",
            mesaage: "write your email address",
            name: "email"
        },
        {
            type: "input",
            message: "write the URL of your github profile picture",
            name: "picture"
        },

    ]);

}

  function generateReadME(response) {
      return `

    

    # Table of contents  

    -[Description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[contributor](#contributor)
    -[test](#test)
    -[credit](#credit)
    -[License](#Licensse)
    -[questions](#questions)

    ## Description:
    ![license](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

    ${response.description}

    ## Installation:
    ${response.installation}
    ## Usage:
    ${response.usage}
    ## TEst:
    ${response.test}
    ## Credits:
    ${response.credit}
    ## License:
    ${response.license}

    -For more Detail, please click the link. [license](https://opensource.org/license/${response.license})

   ## Questions:
   for questions about the gewnerator you can gon to my GitHub page at the next link provided
   -[Github Profile](https://github.com/${response.username})


   if you have any questions you can reach out to my email address: ${response.email}.


`;
  }
    //to initialize the program

    async function init() {
        try {
            const response = await promptUser();

            const readMe = generateReadMe(response);

            await writeFileAsync("README.md", readMe);
            console.log("success!");
        }catch (err) {
            console.log(err);
        }
    }

    //to call to initialize the program

    init();







// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
