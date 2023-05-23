class MarkDown {
    static renderLicenseBadge(license){
        const badges = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            gnuplv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        }
        return badges[license]
    }
    static renderLicenseLink(license) {
        const licenseLinks = {
            mit: '[MIT]https://opensource.org/license/mit/',
            isc: '[ISC]https://opensource.org/license/isc-license-txt/',
            gnuplv3: '[GNUPLV3]https://www.gnu.org/licenses/agpl-3.0',
        }
        return licenseLinks[license]
    }
    static renderLicenseSection(license){
        if(license){
            return 'Licensed under the ${this.renderLicenseLink(license)} license'
        } else {
            return ''
        }
    }

    static generateReadme(answers){
    return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Projectdescription](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description 
${answers.description}

## Usage
${answers.usage}

## Contributing 
${answers.contributing}

## Installation 
${answers.installation}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseLink(answers.license)}
`
    }
}
module.exports = MarkDown