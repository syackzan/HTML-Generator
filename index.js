const inquirer = require("inquirer");
const fs = require('fs'); 

function writeHTML (data){
  let filler = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Title</title>
      <!-- BootStrap Link -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  </head>
      <body class="d-flex h-100 text-center text-white bg-dark">
      
          <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header class="mb-auto">
              <div>
                <h3 class="float-md-start mb-0">Born In: ${data.location}</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                  <a class="nav-link active" aria-current="page" href="${data.github}">My GitHub</a>
                  <a class="nav-link" href="${data.linkedIn}">My LinkedIn</a>
                  <a class="nav-link" href="${data.email}">My Email</a>
                </nav>
              </div>
            </header>
          
            <main class="px-3">
              <h1>${data.name}</h1>
              <p class="lead">Bio: ${data.bio}</p>
              <p class="lead"> Morning or Night Person: ${data.typeofperson} </p>
              <p class ="lead">Coke or Pepsi: ${data.drinktype}</p>
              <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark">Favorite Photo</a>
              </p>
            </main>
          
            <footer class="mt-auto text-white-50">
              <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
            </footer>
          </div>
  </body>
  </html>`;
  
  fs.writeFile('index.html', JSON.stringify(filler), (err) =>
  err ? console.error(err) : console.log('Success!')
  );
}

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
















