process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const AttendanceModel = require('../models/attendance');
const boom = require('boom');
var mongoose = require('mongoose');

chai.should();
chai.use(chaiHttp);

let attendance = new AttendanceModel({
  date: '2018-12-03T00:00:02.003Z',
  status: '+',
  remark: '',
  student: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
});

describe('Attendances', () => {
  beforeEach(done => {
    AttendanceModel.remove({}, error => {
      done();
      if (error) {
        done(boom.badData(error));
      }
    });
  });

  describe('/GET attendance', () => {
    it('it should get all attendances', done => {
      chai.request(app)
        .get('/attendances')
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

  describe('/POST attendance', () => {
    it('it should post attendance', done => {
      chai.request(app)
        .post('/attendances')
        .set('token', CONFIG.TOKEN_TEST)
        .send(attendance)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('date');
          response.body.should.have.property('status');
          response.body.should.have.property('remark');
          response.body.should.have.property('student');
          done();
          console.log(response.body);
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET/:id attendance', () => {
    it('it should GET an attendance by the given id', (done) => {
      let attendance = new AttendanceModel({ date: '2018-12-03T00:00:02.003Z', status: '+', remark: '' });
      attendance.save((error, attendance) => {
        chai.request(app)
          .get('/attendances/' + attendance.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send(attendance)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('date');
            response.body.should.have.property('status');
            response.body.should.have.property('remark');
            response.body.should.have.property('student');
            response.body.should.have.property('_id').eql(attendance.id);
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

  describe('/PUT/:id attendance', () => {
    it('it should UPDATE an attendance by given id', (done) => {
      attendance.save((error, attendance) => {
        chai.request(app)
          .put('/attendances/' + attendance.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send({
            date: '2018-11-06T21:03:02.003Z',
            status: '-',
            remark: 'Nebuvo',
            student: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Attendance updated!');
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

  describe('/DELETE/:id attendance', () => {
    it('it should DELETE a attendance by given id', (done) => {
      let attendance = new AttendanceModel({ date: '2018-12-03T00:00:02.003Z', status: '+', remark: '' });
      attendance.save((error, attendance) => {
        chai.request(app)
          .delete('/attendances/' + attendance.id)
          .set('token', CONFIG.TOKEN_TEST)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Attendance successfully deleted!');
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
