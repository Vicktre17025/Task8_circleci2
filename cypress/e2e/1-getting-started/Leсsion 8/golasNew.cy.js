// /// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
const { getlists } = require('../../../modules/lists');

const url = 'https://api.clickup.com/api/v2'
describe('Test for goals api for Clickup', () => {

 it('Sent GET request to goals with valid name returns 200', () => {
    getlists ()
    cy.SentRequest('GET', 'folder/901211387920')
    .then((response)=>{
  expect(response.status).to.eq(200)
  })
  })

    it('Sent POST request to goals with valid name returns 200', () => {
         cy.SentRequest('POST', 'folder/901211387920/list', {"name": faker.person.firstName() })
.then((response)=>{
  expect(response.status).to.eq(200)
  })
  })



   it('Sent PUT request to goals with valid name returns 200', () => {
    let listId;
cy.SentRequest('POST', 'folder/901211387920/list', {"name": faker.person.firstName()})
.then((response)=> {
    cy.log (response.body.id)
    listId = response.body.id
    cy.log (listId)
    cy.SentRequest('PUT', `list/${listId}`, {"name": faker.person.firstName() })
    .then((response)=>{
        expect(response.status).to.eq(200)
    })
})
})
})