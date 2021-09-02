const inquirer = require("inquirer");
const fs = require('fs'); 

inquirer 
.prompt([
 { type: `input`,
  name: `name`,
  message: `What is your name?`,
},
{ type: `input`,
  name: `name`,
  message: `What is your current location?`,
},
{ type: `input`,
  name: `name`,
  message: `What is you LinkedIn URL?`,
},
{ type: `input`,
  name: `name`,
  message: `Can you please share a short bio of yourself?`,
},

{ type: `list`,
  choices: ["coke", "pepsi", "water"],
  name: `name`,
  message: `Do you like coke, pepsi or water?`,
},

{ type: `checkbox`,
  choices: [ "morning" , "night"],
  name: `name`,
  message: `Do you consider yourself a morning or night person?`,
},



])
