const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const { pageTemplate } = require('./src/template');

var responses = [];

function questions() {
    inquirer
        .prompt([
            {
                type: 'list', 
                name: 'workerRole', 
                message: 'Please enter job title.',
                choices: ( 'Engineer', 'Intern', 'Manager' )
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
                name: 'officeNumber',
                message: 'Enter office number for manager.',
                when: (response => response.workerRole === 'Manager'),
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
        ])
        .then ((response) => {
            if (response.workerRole === 'Manager') {
                responses.push(
                    new Manager(
                        response.name,
                        response.id,
                        response.email,
                        response.officeNumber
                    )
                )
            } else if (response.workerRole === 'Engineer') {
                responses.push(
                    new Engineer(
                        response.name,
                        response.id,
                        response.email,
                        response.github
                    )
                )
            } else if (response.workerRole === 'Intern') {
                responses.push(
                    new Intern(
                        response.name,
                        response.id,
                        response.email,
                        response.school
                    )
                )
            }
        })
}