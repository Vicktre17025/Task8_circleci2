const {  creategoal, deletegoal } = require('../../modules/goal');


describe('Goals API', () => {

  describe('Create Goal returns 200', () => {

    it('Create Goal', () => {

      creategoal()
        .then((response) => {

          expect(response.status).to.eq(200);
          expect(response.body.goal).to.exist;
          expect(response.body.goal.id).to.exist;
          expect(response.body.goal.name).to.exist;

          return deletegoal(response.body.goal.id);
        })

    })

  })

})