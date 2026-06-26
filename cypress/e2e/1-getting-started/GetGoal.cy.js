const {   creategoal, getgoal, deletegoal } = require('../../modules/goal');

describe ('Get Goal returns 200', () => {

  it('Create Goal -> Get Goal -> Delete Goal', () => {

    creategoal()
      .then((createResponse) => {expect(createResponse.status).to.eq(200);
        const goalId = createResponse.body.goal.id;
        return getgoal(goalId)
        .then((getResponse) => {
            expect(getResponse.status).to.eq(200);
            expect(getResponse.body.goal.id).to.eq(goalId);
            return deletegoal(goalId);
          })

      })

  })
   })
