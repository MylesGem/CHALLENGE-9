const inquirer = require('inquirer')
const fs = require('fs')
const MarkDown = require('./lib/ReadmeGen')
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
    },    
    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage?',
    },    
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email info for questions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github info for questions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT','ISC','GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    },
]
//run query func
async function runQuery(){
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err) {
            if(err){
                console.log('Could not save file')
            }
            else {
                console.log('Success: new README.md file Generated inside the current folder')
            }
        })

    })
    .catch((err) => {
        console.log(err)
    })
}
runQuery()