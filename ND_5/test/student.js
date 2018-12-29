process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const StudentModel = require('../models/student');
const boom = require('boom');
var mongoose = require('mongoose');

chai.should();
chai.use(chaiHttp);

let student = new StudentModel({
  student_name_surname: 'Name Surname',
  parent_name_surname: 'Name Surname',
  address: 'Address 15',
  telephone: '+37060000000',
  email: 'email@email.com',
  group: 'group',
  identification_number: '11111111111',
  teacher: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
});

describe('Students', () => {
  beforeEach(done => {
    StudentModel.remove({}, error => {
      done();
      if (error) {
        done(boom.badData(error));
      }
    });
  });

  describe('/GET with unauthorized access', () => {
    it('it should return unauthorized', done => {
      chai.request(app)
        .get('/students')
        .end((error, response) => {
          response.should.have.status(401);
          done();
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET student', () => {
    it('it should get all students', done => {
      chai.request(app)
        .get('/students')
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

  describe('/POST student', () => {
    it('it should post student', done => {
      chai.request(app)
        .post('/students')
        .set('token', CONFIG.TOKEN_TEST)
        .send(student)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('student_name_surname');
          response.body.should.have.property('parent_name_surname');
          response.body.should.have.property('address');
          response.body.should.have.property('telephone');
          response.body.should.have.property('email');
          response.body.should.have.property('group');
          response.body.should.have.property('identification_number');
          response.body.should.have.property('teacher');
          done();
          console.log(response.body);
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET/:id student', () => {
    it('it should GET an student by the given id', (done) => {
      student.save((error, student) => {
        chai.request(app)
          .get('/students/' + student.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send(student)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('student_name_surname');
            response.body.should.have.property('parent_name_surname');
            response.body.should.have.property('address');
            response.body.should.have.property('telephone');
            response.body.should.have.property('email');
            response.body.should.have.property('group');
            response.body.should.have.property('identification_number');
            response.body.should.have.property('teacher');
            response.body.should.have.property('_id').eql(student.id);
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

  describe('/PUT/:id student', () => {
    it('it should UPDATE an student by given id', (done) => {
      student.save((error, student) => {
        chai.request(app)
          .put('/students/' + student.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send({
            student_name_surname: 'Name Surname',
            parent_name_surname: 'Name Surname',
            address: 'Address 10',
            telephone: '+37060000000',
            email: 'email@email.com',
            group: 'group',
            identification_number: '22222222222',
            teacher: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Student updated!');
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

  describe('/DELETE/:id student', () => {
    it('it should DELETE a student by given id', (done) => {
      let student = new StudentModel({
        student_name_surname: 'Name Surname',
        parent_name_surname: 'Name Surname',
        address: 'Address 15',
        telephone: '+37060000000',
        email: 'email@email.com',
        group: 'group',
        identification_number: '11111111111',
        teacher: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
      });
      student.save((error, student) => {
        chai.request(app)
          .delete('/students/' + student.id)
          .set('token', CONFIG.TOKEN_TEST)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Student successfully deleted!');
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
