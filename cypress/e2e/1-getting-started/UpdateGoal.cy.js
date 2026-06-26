const {   creategoal,updategoal, getgoal, deletegoal } = require('../../modules/goal');


describe('Update Goal returns 200', () => {

  it('Create Goal -> Update Goal -> Delete Goal', () => {

    const updatedName = 'Updated Goal';

    creategoal()
    .then((createResponse) => {expect(createResponse.status).to.eq(200);

        const goalId = createResponse.body.goal.id;
        return updategoal(goalId, updatedName)
        .then((updateResponse) => {expect(updateResponse.status).to.eq(200);
            return getgoal(goalId);
          })
          .then((getResponse) => {
            expect(getResponse.status).to.eq(200);
            expect(getResponse.body.goal.name).to.eq(updatedName);

            return deletegoal(goalId);
          })

      })

  })

})