// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registerUser', (data = null) => {
    let usernameField = cy.get('input[name="username"]')
    let emailField = cy.get('input[name="email"]')
    let passwordField = cy.get('input[id="password"]')
    let confirmPassField = cy.get('input[id="confirmPassword"]')
    let roleUser = cy.get('input[id="role-user"]')
    let roleMaster = cy.get('input[id="role-quiz-master"]')
    let submitButton = cy.get('button[type="submit"]')


    usernameField.should('be.visible')
    usernameField.should('have.value', '')
    usernameField.type(data.username)
    emailField.should('be.visible')
    emailField.should('have.value', '')
    emailField.type(data.email)
    passwordField.should('be.visible')
    passwordField.should('have.value', '')
    passwordField.type(data.password)
    confirmPassField.should('be.visible')
    confirmPassField.should('have.value', '')
    confirmPassField.type(data.password)

    if (data.role === "user") {
        roleUser.click()

    } else {
        roleMaster.click()
        cy.get('p[class="mt-2 text-xs text-gray-500"]').should('be.visible').and('have.text', "As a Quiz Master, you'll be able to create and manage topics and questions.")
    }

    submitButton.click()
    cy.wait(5000)
    cy.visit('/')
})

Cypress.Commands.add('loginUser', (data = null) => {
    let userField = cy.get('input[data-testid="input-username"]')
    let passField = cy.get('input[data-testid="input-password"]')
    let submitButton = cy.get('button[type=submit]')

    userField.type(data.username)
    passField.type(data.password)
    submitButton.click()

    if(data.role === "user"){
        cy.url().should('contain','/topics')
    } else {
        cy.url().should('contain','/manage-topics')
    }
    cy.wait(5000)
})