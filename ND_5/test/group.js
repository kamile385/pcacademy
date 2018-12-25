process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const GroupModel = require('../models/group');

chai.should();
chai.use(chaiHttp);

describe('Groups', () => {
  beforeEach(done => {
    GroupModel.remove({}, error => {
      done();
    });
  });

  describe('/GET group', () => {
    it('it should get all group', done => {
      chai.request(app)
        .get('/groups')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eql(0);
          done();
          console.log(response.body);
        });
    });
  });

  describe('/POST group', () => {
    it('it should post group', done => {
      let group = {
        name: 'Kompiuterinis projektavimas',
        group_grade: 9,
        day_of_week: 'Ketvirtadienis',
        time_from: '17:00',
        time_to: '18:00'
      };
      chai.request(app)
        .post('/groups')
        .send(group)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('name');
          response.body.should.have.property('group_grade');
          response.body.should.have.property('day_of_week');
          response.body.should.have.property('time_from');
          response.body.should.have.property('time_to');
          done();
          console.log(response.body);
        });
    });
  });

  describe('/GET/:id group', () => {
    it('it should GET an group by the given id', (done) => {
      let group = new GroupModel({
        name: 'Kompiuterinis projektavimas',
        group_grade: 9,
        day_of_week: 'Ketvirtadienis',
        time_from: '17:00',
        time_to: '18:00'
      });
      group.save((error, group) => {
        chai.request(app)
          .get('/groups/' + group.id)
          .send(group)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('name');
            response.body.should.have.property('group_grade');
            response.body.should.have.property('day_of_week');
            response.body.should.have.property('time_from');
            response.body.should.have.property('time_to');
            response.body.should.have.property('_id').eql(group.id);
            done();
            console.log(response.body);
          });
      });
    });
  });

  describe('/PUT/:id group', () => {
    it('it should UPDATE an group by given id', (done) => {
      let group = new GroupModel({
        name: 'Kompiuterinis projektavimas',
        group_grade: 9,
        day_of_week: 'Ketvirtadienis',
        time_from: '17:00',
        time_to: '18:00'
      });
      group.save((error, group) => {
        chai.request(app)
          .put('/groups/' + group.id)
          .send({
            name: 'Kompiuterinis projektavimas',
            group_grade: 9,
            day_of_week: 'Ketvirtadienis',
            time_from: '16:00',
            time_to: '18:00'
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Group updated!');
            done();
            console.log(response.body);
          });
      });
    });
  });

  describe('/DELETE/:id group', () => {
    it('it should DELETE a group by given id', (done) => {
      let group = new GroupModel({
        name: 'Kompiuterinis projektavimas',
        group_grade: 9,
        day_of_week: 'Ketvirtadienis',
        time_from: '17:00',
        time_to: '18:00'
      });
      group.save((error, group) => {
        chai.request(app)
          .delete('/groups/' + group.id)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Group successfully deleted!');
            done();
            console.log(response.body);
          });
      });
    });
  });
});
