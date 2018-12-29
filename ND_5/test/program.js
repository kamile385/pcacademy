process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const ProgramModel = require('../models/program');
const boom = require('boom');
var mongoose = require('mongoose');

chai.should();
chai.use(chaiHttp);

describe('Programs', () => {
  beforeEach(done => {
    ProgramModel.remove({}, error => {
      done();
      if (error) {
        done(boom.badData(error));
      }
    });
  });

  describe('/GET with unauthorized access', () => {
    it('it should return unauthorized', done => {
      chai.request(app)
        .get('/programs')
        .end((error, response) => {
          response.should.have.status(401);
          done();
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET program', () => {
    it('it should get all programs', done => {
      chai.request(app)
        .get('/programs')
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

  describe('/POST program', () => {
    it('it should post program', done => {
      let program = new ProgramModel({
        name: 'Matematikos bičiuliai',
        group_grade: '1',
        description: '',
        teacher: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
      });
      chai.request(app)
        .post('/programs')
        .set('token', CONFIG.TOKEN_TEST)
        .send(program)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('name');
          response.body.should.have.property('group_grade');
          response.body.should.have.property('description');
          // response.body.should.have.property('teacher');
          done();
          console.log(response.body);
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET/:id program', () => {
    it('it should GET an program by the given id', (done) => {
      let program = new ProgramModel({
        name: 'Matematikos bičiuliai',
        group_grade: '1',
        description: '',
        teacher: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
      });
      program.save((error, program) => {
        chai.request(app)
          .get('/programs/' + program.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send(program)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('name');
            response.body.should.have.property('group_grade');
            response.body.should.have.property('description');
            response.body.should.have.property('teacher');
            response.body.should.have.property('_id').eql(program.id);
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

  describe('/PUT/:id program', () => {
    it('it should UPDATE an program by given id', (done) => {
      let program = new ProgramModel({
        name: 'Matematikos bičiuliai',
        group_grade: '1',
        description: '',
        teacher: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
      });
      program.save((error, program) => {
        chai.request(app)
          .put('/programs/' + program.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send({
            name: 'Matematikos bičiuliai',
            group_grade: '2-3',
            description: 'Būrelis 2 ir 3 klasės moksleiviams',
            teacher: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Program updated!');
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

  describe('/DELETE/:id program', () => {
    it('it should DELETE a program by given id', (done) => {
      let program = new ProgramModel({
        name: 'Matematikos bičiuliai',
        group_grade: '1',
        description: '',
        teacher: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
      });
      program.save((error, program) => {
        chai.request(app)
          .delete('/programs/' + program.id)
          .set('token', CONFIG.TOKEN_TEST)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Program successfully deleted!');
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
