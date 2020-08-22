const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//function that can creat array of questions



const promptUser = () => {
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
           message: "what are the test instructions?",
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

    ])

};

  const generateMarkdown = (data) => {
      return `
   # ${data.title}

    

    # Table of contents  

    -[Description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[contributor](#contributor)
    -[test](#test)
    -[credits](#credits)
    -[License](#Licensse)
    -[questions](#questions)

    ## Description:
    ![license](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

    ${data.description}

    ## Installation:
    ${data.installation}
    ## Usage:
    ${data.usage}
    ## TEst:
    ${data.test}
    ## Credits:
    ${data.credits}
    ## License:
    

    -For more Detail, please click the link. [license](https://opensource.org/license/${data.license})

   ## Questions:
   for questions about the generator you can go to my GitHub page using the next link provided
   -[Github Profile](https://github.com/${data.username})


   if you have any questions you can reach out to my email address: ${data.email}.


`;
  }
    //to initialize the program

  const init =  async() => {
        try {
            const data = await promptUser();

            const readMe = generateMarkdown(data);

            await writeFileAsync("README.md", readMe);

            console.log("success!");

        } catch (err) {
            console.log(err);
        }
    };

    //to call to initialize the program

    init();





