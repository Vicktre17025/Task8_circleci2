const { faker } = require('@faker-js/faker');

export function getlists(){
return cy.SentRequest('GET', 'folder/901211387920')
}

export function createlist(){
return cy.SentRequest('POST', 'folder/901211387920/list', {"name": faker.person.firstName()})

}

export function updatelist(listId){
return cy.SentRequest('PUT', `list/${listId}`, {"name": faker.person.firstName() })
}


export function deleltelist(listId){
return cy.SentRequest('DELETE', `list/${listId}`)
}
