// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
      " ",
      "_"
    )}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseName) {
  const licenses = {
    MIT: "https://opensource.org/licenses/MIT",
    "GPL-3.0": "https://www.gnu.org/licenses/gpl-3.0.html",
    "Apache-2.0": "https://opensource.org/licenses/Apache-2.0",
    "BSD-2-Clause": "https://opensource.org/licenses/BSD-2-Clause",
    "BSD-3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
  };
  return licenses[licenseName] || "License not found";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    const link = renderLicenseLink(license);
    return `## License\nThis project is licensed under the ${license} License. \nSee the [LICENSE](${link}) for more information.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  
  ## Title
  ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableofcontents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usageinformation}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  # My Github - https://github.com/Soulful0
  ${data.questions}

  ## Email
  # My Email - fakeemail@email.com
  ${data.email}
  `;
}

module.exports = generateMarkdown;
