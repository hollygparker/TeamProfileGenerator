const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require('path');
const output = path.resolve(__dirname,"output")
const outputHTML = path.join(output,
    "team.html")
const  fileTemplate  = require('./src/template.js');


var responses = [];

function questions() {
    inquirer
        .prompt([
            {
                type: 'list', 
                name: 'workerRole', 
                message: 'Please enter job title.',
                choices: [ 'Engineer', 'Intern', 'Manager' ]
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name.'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter employee id.',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter employee email.',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter Github username.',
                when: (response => response.workerRole === 'Engineer'),
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter school name.', 
                when: (response => response.workerRole === 'Intern'),
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter office number for manager.',
                when: (response => response.workerRole === 'Manager'),
            },
        ])
        .then ((response) => {
            if (response.workerRole === 'Engineer') {
                // responses.push(
                const manager = new Engineer(
                        response.name,
                        response.id,
                        response.email,
                        response.github
                    )
                    responses.push(manager)
                // )
            } else if (response.workerRole === 'Intern') {
                // responses.push(
                    const intern = new Intern(
                        response.name,
                        response.id,
                        response.email,
                        response.school
                    )
                // )  
                responses.push(intern)
            } else if (response.workerRole === 'Manager') {
                // responses.push(
                    const manager = new Manager(
                        response.name,
                        response.id,
                        response.email,
                        response.officeNumber
                    )
                // )
                responses.push(manager)

            }
            
            inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'continue',
                    message: 'Do you need to continue creating employees?',
                    choices: [ 'Yes', 'No' ]   
                }
            ])
            .then((response) => {
                if (response.continue === 'Yes') {
                    questions();
                } else {
                    console.log(response, "LAST RESPONSE")
                    console.log(responses, "TOTAL RESPONSES")
                    fs.writeFileSync(outputHTML, fileTemplate(responses),"UTF-8"), (err) => {
                        if (err) {
                            console.log('There was an error creating the file.' + err)
                        } else {
                            console.log('Success!')
                        }
                    
                     }
                }
            })
        })
};

questions();