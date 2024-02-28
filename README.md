# Facebook Login Automation

This project automates the process of logging into the Facebook website. It includes both positive and negative login test scenarios. Please note that this process does not support two-factor authentication.

## Folder Structure Overview

- **e2e/**: Test files grouped by module and feature.
- **fixtures/**: Contains static data used by tests.
- **helpers/**:  Contains folder that stores all the helpers function that can be used globally.
- **pages/**: Contains actual page classes that interact with UI elements.
- **page_objects/**: Contains logical parts of page objects.
- **support/**: Support files like commands and custom assertions.
- **cypress.config.json**: Cypress configuration file.

## Setup

### Running Locally

### Prerequisites

- Node.js
- Cypress

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/roshikab/facebook_automation 
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup Environment variable

   ```
    Create .env file
    - `EMAIL_OR_PHONENUMBER` = "Your Facebook Email or Phone Number"
    - `PASSWORD` = "Your Facebook Password"
   ```

4. You can run the Cypress automation locally to test or make adjustments:

   ```
   npx cypress open
   npx cypress run
   ```
### Automation in Action
![Demo]("./../demo.gif)



