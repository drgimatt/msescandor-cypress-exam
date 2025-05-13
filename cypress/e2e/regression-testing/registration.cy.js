import { generateRegistrationData as randomRegisData } from "../../support/fakerUtils"

let UserRegisData = randomRegisData()
UserRegisData.role = 'user'
UserRegisData.roleId = 'role-user'
UserRegisData.expectedRedirect ='/topics'
let MasterRegisData = randomRegisData()
MasterRegisData.role = 'quiz-master'
MasterRegisData.roleId = 'role-quiz-master'
MasterRegisData.expectedRedirect ='/manage-topics'


describe('Sprint 1 -  Registration for Quiz Master & Regular User', { testIsolation: false }, () => {
  it('Verify user registration works for both Quiz Master and Regular User roles', () => {
    cy.visit('/')

    let registerButton = cy.get('a[href="/register"]')
    registerButton.should('have.text', "Register")
    registerButton.should('be.visible').click()

    cy.registerUser(UserRegisData)

    registerButton = cy.get('a[href="/register"]')
    registerButton.should('have.text', "Register")
    registerButton.should('be.visible').click()

    cy.registerUser(MasterRegisData)

  })
  it('Verify newly created account can successfully log in and access appropriate URL', () => {
    cy.visit('/')

    let loginButton = cy.get('a[href="/login"]')
    loginButton.should('have.text', "Log In")
    loginButton.should('be.visible').click()

    cy.loginUser(UserRegisData)

    cy.visit('/')

    loginButton = cy.get('a[href="/login"]')
    loginButton.should('have.text', "Log In")
    loginButton.should('be.visible').click()

    cy.loginUser(MasterRegisData)

  })
})