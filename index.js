const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        // Project title
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        // Description of the project
        type: "input",
        name: "description",
        message: "What the project is about?"
    },
    {
        // Installation instructions
        type: "input",
        name: "installation",
        message: "What is the installation process?"
    },
    {
        // Usage instructions
        type: "input",
        name: "usage",
        message: "How to use the application?"
    },
    {
		// List of licenses
		type: 'list',
		message: 'Please select a license for your project.',
		name: 'license',
		choices: [
            {
				name: 'Apache license 2.0',
				value: 'apache-2.0',
			},
            {
				name: 'GNU General Public License v3.0',
				value: 'gpl-3.0',
			},
			{
				name: 'MIT',
				value: 'mit',
			},
            {
				name: 'BSD 2-clause "Simplified" license',
				value: 'bsd-2-clause',
			},
            {
				name: 'BSD 3-clause "New" or "Revised" license',
				value: 'bsd-3-clause',
			},
            {
				name: 'Boost Software License 1.0',
				value: 'bsl-1.0',
			},
            {
				name: 'Creative Commons Zero v1.0 Universal',
				value: 'cc0-1.0',
			},
            {
				name: 'Eclipse Public License 1.0',
				value: 'epl-1.0',
			},
			{
				name: 'GNU Affero General Public License v3.0',
				value: 'agpl-3.0',
			},
			{
				name: 'GNU General Public License v2.0',
				value: 'gpl-2.0',
			},
			{
				name: 'GNU Lesser General Public License v3.0',
				value: 'lgpl-3.0',
			},
			{
				name: 'Mozilla Public 2.0',
				value: 'mpl-2.0',
			},
			{
				name: 'The Unlicense',
				value: 'unlicense',
			},
		],
	},
    {
        // Contributors
        type: "input",
        name: "contributing",
        message: "How to contribute to this project?"
    },
    {
        // How to test this application
        type: "input",
        name: "tests",
        message: "How to test this application?"
    },
    {
        // How to ask questions about this project - email
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        // How to ask questions about this project - github
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error("Could not create README.md");
          return;
        }
        console.log(`README.md file has been created successfully at ${path.resolve(fileName)}`);
    });
}

// function to initialize program
function init() {
    return inquirer.prompt(questions)
    .then((data)=>{
        const generateReadme = generateMarkdown(data);
        writeToFile("README.md", generateReadme);
    })
    .catch((error) => {
        console.log(error);
    })
}

// function call to initialize program
init();
