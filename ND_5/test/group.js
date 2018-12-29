process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const GroupModel = require('../models/group');
const boom = require('boom');
var mongoose = require('mongoose');

chai.should();
chai.use(chaiHttp);

let group = new GroupModel({
  name: 'Kompiuterinis projektavimas',
  group_grade: 9,
  day_of_week: 'Ketvirtadienis',
  time_from: '17:00',
  time_to: '18:00',
  program: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
});

describe('Groups', () => {
  beforeEach(done => {
    GroupModel.remove({}, error => {
      done();
      if (error) {
        done(boom.badData(error));
      }
    });
  });

  describe('/GET with unauthorized access', () => {
    it('it should return unauthorized', done => {
      chai.request(app)
        .get('/groups')
        .end((error, response) => {
          response.should.have.status(401);
          done();
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET group', () => {
    it('it should get all group', done => {
      chai.request(app)
        .get('/groups')
        .set('token', CONFIG.TOKEN_TEST)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eql(0);
          done();
          console.log(response.body);
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/POST group', () => {
    it('it should post group', done => {
      chai.request(app)
        .post('/groups')
        .set('token', CONFIG.TOKEN_TEST)
        .send(group)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('name');
          response.body.should.have.property('group_grade');
          response.body.should.have.property('day_of_week');
          response.body.should.have.property('time_from');
          response.body.should.have.property('time_to');
          response.body.should.have.property('program');
          done();
          console.log(response.body);
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET/:id group', () => {
    it('it should GET an group by the given id', (done) => {
      group.save((error, group) => {
        chai.request(app)
          .get('/groups/' + group.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send(group)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('name');
            response.body.should.have.property('group_grade');
            response.body.should.have.property('day_of_week');
            response.body.should.have.property('time_from');
            response.body.should.have.property('time_to');
            response.body.should.have.property('program');
            response.body.should.have.property('_id').eql(group.id);
            done();
            console.log(response.body);
            if (error) {
              done(boom.badData(error));
            }
          });
        if (error) {
          done(boom.badData(error));
        }
      });
    });
  });

  describe('/PUT/:id group', () => {
    it('it should UPDATE an group by given id', (done) => {
      group.save((error, group) => {
        chai.request(app)
          .put('/groups/' + group.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send({
            name: 'Kompiuterinis projektavimas',
            group_grade: 9,
            day_of_week: 'Ketvirtadienis',
            time_from: '16:00',
            time_to: '18:00',
            program: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Group updated!');
            done();
            console.log(response.body);
            if (error) {
              done(boom.badData(error));
            }
          });
        if (error) {
          done(boom.badData(error));
        }
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
        time_to: '18:00',
        program: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
      });
      group.save((error, group) => {
        chai.request(app)
          .delete('/groups/' + group.id)
          .set('token', CONFIG.TOKEN_TEST)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Group successfully deleted!');
            done();
            console.log(response.body);
            if (error) {
              done(boom.badData(error));
            }
          });
        if (error) {
          done(boom.badData(error));
        }
      });
    });
  });
});
