const { faker } = require('@faker-js/faker');

export function getgoal(goalId){
  return cy.SentRequest('GET', `goal/${goalId}`)
}

export function creategoal(){
  return cy.SentRequest('POST', 'team/90121772320/goal',{ name: faker.person.firstName() }
  )
}

export function updategoal(goalId, name){
  return cy.SentRequest('PUT',`goal/${goalId}`,{ name })
}

export function deletegoal(goalId){
  return cy.SentRequest('DELETE',`goal/${goalId}`)
}

export function goals(){
  return cy.SentRequest('GET', 'team/90121772320/goal')
}
