const inquirer = require("inquirer");
const fs = require('fs'); 

inquirer 
.prompt([
 { type: `input`,
  name: `name`,
  message: `What is your first name?`,
},
{ type: `input`,
  name: `location`,
  message: `What is your current location?`,
},
{ type: `input`,
  name: `linkedIn`,
  message: `What is you LinkedIn URL?`,
},
{ type: `input`,
  name: `bio`,
  message: `Can you please share a short bio of yourself?`,
},

{ type: `list`,
  choices: ["coke", "pepsi", "water"],
  name: `drinktype`,
  message: `Do you like coke, pepsi or water?`,
},

{ type: `checkbox`,
  choices: [ "morning" , "night"],
  name: `typeofperson`,
  message: `Do you consider yourself a morning or night person?`,
},
])

.then((data) => { 
  const filename = `${data.name}.json`;

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
  err ? console.log(err) : console.log('Success!')
  );
});


