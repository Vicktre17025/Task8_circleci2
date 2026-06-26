const {  creategoal, deletegoal } = require('../../modules/goal');

describe('Delete Goal returns 200', () => {

  it('Create Goal -> Delete Goal', () => {

    creategoal()
      .then((createResponse) => {expect(createResponse.status).to.eq(200);
        const goalId = createResponse.body.goal.id;
        return deletegoal(goalId);
      })
      .then((deleteResponse) => {expect(deleteResponse.status).to.eq(200);

      })

  })

})