/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Test for goals api for Clickup', () => {
 it('Sent GET request to goals with valid name returns 200', () => {
cy.request({
method: 'GET',
url:'folder/901211627532',
headers: {
  'Authorization': 'pk_210233017_YNJBMSJ3HQNR4W3DGFT0ARZIIF6RUFXB'
},

}).then((response)=>{
  expect(200).to.eq(response.status)
  cy.log(response.status)
})
  })

  it('Sent POST request to goals with valid name returns 200', () => {
cy.request({
method: 'POST',
url:'folder/901211627532/list',
headers: {
  'Authorization': 'pk_210233017_YNJBMSJ3HQNR4W3DGFT0ARZIIF6RUFXB'
},
body: {"name": faker.person.firstName()},
failOnStatusCode: false
}).then((response)=>{
expect(200).to.eq(response.status)
cy.printMessage()
})
  })

  

})
