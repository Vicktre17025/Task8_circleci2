Cypress.Commands.add('printMessage', () => {
    cy.log('Hello world')
})

Cypress.Commands.add('SentRequest', (type, endpoint, body = null)=> {

    cy.request({
method: type,
url:endpoint,
headers: {
  'Authorization': 'pk_210233017_YNJBMSJ3HQNR4W3DGFT0ARZIIF6RUFXB'
},
body: body,
failOnStatusCode: false
})
} )