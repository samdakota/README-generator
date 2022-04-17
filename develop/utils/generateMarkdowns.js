const licenses = [
  {
    name: 'MIT',
    badgeURL: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    licenseURL: 'https://opensource.org/licenses/MIT',
  },
  {
    name: 'GNU',
    badgeURL: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    licenseURL: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  {
    name: 'Apache',
    badgeURL: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    licenseURL: 'https://opensource.org/licenses/Apache-2.0',
  }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return licenses[0].badgeURL;
    case "GNU":
      return licenses[1].badgeURL;
    case "Apache":
      return licenses[2].badgeURL;
    default :
      return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return licenses[0].licenseURL;
    case "GNU":
      return licenses[1].licenseURL;
    case "Apache":
      return licenses[2].licenseURL;
    default :
      return "";
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "Licensed under [MIT](" + renderLicenseLink(license) + ") ![badge](" + renderLicenseBadge(license) + ")";
    case "GNU":
      return "Licensed under [GNU](" + renderLicenseLink(license) + ") ![badge](" + renderLicenseBadge(license) + ")";
    case "Apache":
      return "Licensed under [Apache](" + renderLicenseLink(license) + ") ![badge](" + renderLicenseBadge(license) + ")";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ---
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Contribution](#contribution)
  4. [Usage](#usage)
  5. [Test Instructions](#test-instructions)
  6. [Questions](#questions) \n
  ${renderLicenseSection(data.license)}
  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.installation}
  ## Contribution: 
  ${data.contribution}
  ## Usage: 
  ${data.usage}
  ## Test Instructions: 
  ${data.testInstructions}
  ## Questions:
  https://www.github.com/${data.githubName} \n
  Please send any questions to [${data.emailAddress}](mailto:${data.emailAddress}).
  `;
}

module.exports = generateMarkdown;
