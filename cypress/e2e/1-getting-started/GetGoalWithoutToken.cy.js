const {  creategoal, deletegoal } = require('../../modules/goal');


describe('Get Goal without token returns 401', () => {

  it('Create Goal -> Get Goal without token -> Delete Goal', () => {

    let goalId;

    creategoal()
      .then((createResponse) => {

        expect(createResponse.status).to.eq(200);

        goalId = createResponse.body.goal.id;

        return cy.request({
          method: 'GET',
          url: `https://api.clickup.com/api/v2/goal/${goalId}`,
          failOnStatusCode: false
        });
      })
      .then((response) => {

        expect(response.status).to.eq(400);

        return deletegoal(goalId);
      });

  });

});