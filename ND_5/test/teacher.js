process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const TeacherModel = require('../models/teacher');
const boom = require('boom');

chai.should();
chai.use(chaiHttp);

describe('Teachers', () => {
  beforeEach(done => {
    TeacherModel.remove({}, error => {
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

  describe('/GET teacher', () => {
    it('it should get all teachers', done => {
      chai.request(app)
        .get('/teachers')
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
});
