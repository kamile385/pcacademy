process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const PaymentModel = require('../models/payment');
const boom = require('boom');
var mongoose = require('mongoose');

chai.should();
chai.use(chaiHttp);

let payment = new PaymentModel({
  month: 'September',
  amount: 15,
  state_financing: 15,
  praise: 0,
  not_first_year: 5,
  second_program: 0,
  student: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
});

describe('Payments', () => {
  beforeEach(done => {
    PaymentModel.remove({}, error => {
      done();
      if (error) {
        done(boom.badData(error));
      }
    });
  });

  describe('/GET with unauthorized access', () => {
    it('it should return unauthorized', done => {
      chai.request(app)
        .get('/payments')
        .end((error, response) => {
          response.should.have.status(401);
          done();
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET payment', () => {
    it('it should get all payments', done => {
      chai.request(app)
        .get('/payments')
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

  describe('/POST payment', () => {
    it('it should post payment', done => {
      chai.request(app)
        .post('/payments')
        .set('token', CONFIG.TOKEN_TEST)
        .send(payment)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('month');
          response.body.should.have.property('amount');
          response.body.should.have.property('state_financing');
          response.body.should.have.property('praise');
          response.body.should.have.property('not_first_year');
          response.body.should.have.property('second_program');
          response.body.should.have.property('student');
          done();
          console.log(response.body);
          if (error) {
            done(boom.badData(error));
          }
        });
    });
  });

  describe('/GET/:id payment', () => {
    it('it should GET an payment by the given id', (done) => {
      payment.save((error, payment) => {
        chai.request(app)
          .get('/payments/' + payment.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send(payment)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('month');
            response.body.should.have.property('amount');
            response.body.should.have.property('state_financing');
            response.body.should.have.property('praise');
            response.body.should.have.property('not_first_year');
            response.body.should.have.property('second_program');
            response.body.should.have.property('student');
            response.body.should.have.property('_id').eql(payment.id);
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

  describe('/PUT/:id payment', () => {
    it('it should UPDATE an payment by given id', (done) => {
      payment.save((error, payment) => {
        chai.request(app)
          .put('/payments/' + payment.id)
          .set('token', CONFIG.TOKEN_TEST)
          .send({
            month: 'August',
            amount: 15,
            state_financing: 15,
            praise: 0,
            not_first_year: 5,
            second_program: 0,
            student: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Payment updated!');
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

  describe('/DELETE/:id payment', () => {
    it('it should DELETE a payment by given id', (done) => {
      let payment = new PaymentModel({
        month: 'September',
        amount: 15,
        state_financing: 15,
        praise: 0,
        not_first_year: 5,
        second_program: 0,
        student: mongoose.Types.ObjectId('51bb793aca2ab77a3200000d')
      });
      payment.save((error, payment) => {
        chai.request(app)
          .delete('/payments/' + payment.id)
          .set('token', CONFIG.TOKEN_TEST)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Payment successfully deleted!');
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
