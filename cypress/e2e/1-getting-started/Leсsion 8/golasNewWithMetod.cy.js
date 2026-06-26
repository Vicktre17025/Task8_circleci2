// /// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
const { getlists, createlist, updatelist, deleltelist } = require('../../../modules/lists');
//const url = 'https://api.clickup.com/api/v2'


describe('Test for goals api for Clickup', () => {

 it('Sent GET request to goals with valid name returns 200', () => {
    getlists ()
    .then((response)=>{
  expect(response.status).to.eq(200)
  })
  })

    it('Sent POST request to goals with valid name returns 200', () => {
        createlist()
.then((response)=>{
  expect(response.status).to.eq(200)
  })
  })



   it('Sent PUT request to goals with valid name returns 200', () => {
createlist ()
.then((response)=> {
    cy.log (response.body.id)
    cy.wrap(response.body.id).as('listIdAlias')
 
   })

   cy.get('@listIdAlias').then((listId)=>{
    updatelist(listId)
    .then((response)=>{
        expect(response.status).to.eq(200)
    })
})
})

 it('Sent DELETe request to goals with valid name returns 200', () => {
createlist ()
.then((response)=> {
    cy.log (response.body.id)
    cy.wrap(response.body.id).as('listIdAlias')
 
   })

   cy.get('@listIdAlias').then((listId)=>{
    deleltelist(listId)
    .then((response)=>{
        expect(response.status).to.eq(200)
    })
})
})

})