# Cypress Exam Repository
## Description

This repository contains sample test automation project that accesses the [Test Automation Quiz Website](https://testautomation-ph-quiz-app.vercel.app/) that namely test two aspects:

- The user is able to register as either as a regular user or as a quiz master
- The user is able to login either as a regular user or as a quiz master

## Getting Started

### Step 1 - Create a Project Folder

* Create a project folder on your desktop (or in preferred location), with a name "Cypress-Projects".

* For Windows - Go to your Desktop, right-click, and select New Folder. Name it Cypress-Projects.

* Mac/Linux: Open your terminal and run the following command to create a folder:

``` mkdir ~/Desktop/Cypress-Projects ```

### Step 2 - Clone the Repository

``` cd ~/Desktop/Cypress-Projects ```
``` git clone https://github.com/drgimatt/msescandor-cypress-exam.git ```

### Step 3 - Install Dependencies

``` cd msescandor-cypress-exam ```
``` npm install ```

## Running the Tests

* The test code file for the Login functionality can be run either in headless (CLI only) or headed mode (With Browser Interface).

### Headless Mode

* To run the test in headless mode:

``` npm run cy-quiz ```

### Headed Mode

* In headed mode, the browser runs with a visible UI. This mode is useful for debugging and visual verification of test actions. To run the test in headless mode:

1. Open Cypress
   
``` npx cypress open ```

2. In the Cypress Interface, click "E2E Testing"
3. Select your preferred browser and click "Start E2E Testing"
4. In the newly opened browser window, select the "registration.cy.js" spec file to start the test

## Author

[@drgimatt](https://github.com/drgimatt)

## License

This project is unlicensed.
