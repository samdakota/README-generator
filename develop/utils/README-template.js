const generateFile = () => {
    return `
        # ${title}
        ---
        ## Table of Contents
        1. [Description](#description)
        2. [Installation](#installation)
        3. [Contribution](#contribution)
        4. [Usage](#usage)
        5. [Test Instructions](#test-instructions)
        6. [Questions](#questions)
        ## Description: 
        ${description}
        ## Installation: 
        ${installation}
        ## Contribution: 
        ${contribution}
        ## Usage: 
        ${usage}
        ## Test Instructions: 
        ${testInstructions}
        ## Questions:
        ${github}
        Please send any questions to ${email}
    `
}