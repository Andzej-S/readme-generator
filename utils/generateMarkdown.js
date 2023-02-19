// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![license](https://img.shields.io/badge/License-${data.license
      .toUpperCase()
      .split('-')
      .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${data.license}/)

  ## Table of Contents
  - [Project description](##Description)
  - [Installation instructions](##Installation)
  - [Usage instruction](##Usage)
  - [How to contribute](##Contributing)
  - [Questions](##Questions)
  - [License](##License)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Questions
  If you have any questions, suggestions or feedback please contact me at:  
  Email: ${data.email}  
  GitHub: ${data.github}

  ## License
  Licended under the ${data.license}
`;
}

module.exports = generateMarkdown;
