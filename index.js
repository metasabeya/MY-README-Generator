const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

//functions to create questions

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is the title of your project",
            name: "title"
            },
            {
                type: "input",
                message: "write the description of your project",
                name: "description"
            },
            {
                type: "input",
                message: "write installation instruction",
                name: "installation"

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
                name: "credits"
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
                message: "insert the url of the picture which you want to make it profile",
                name: "picture"
            },
            
    
        ]);
    
    }

    
//function to initialize program

const init = async() => {
    try {
      const data= await promptUser();
      await writeFileAsync("README.md", generateMarkdown(data));
      console.log("success!");
    }catch(err){
  console.log(err);
    }
  };
 
//to call initialize program

init();
    


     
  
