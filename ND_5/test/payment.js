process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const PaymentModel = require('../models/payment');

chai.should();
chai.use(chaiHttp);

describe('Payments', () => {
  beforeEach(done => {
    PaymentModel.remove({}, error => {
      done();
    });
  });

  describe('/GET payment', () => {
    it('it should get all payments', done => {
      chai.request(app)
        .get('/payments')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eql(0);
          done();
          console.log(response.body);
        });
    });
  });

  describe('/POST payment', () => {
    it('it should post payment', done => {
      let payment = {
        date: '2018-10-15T14:30:14.003Z',
        amount: 15
      };
      chai.request(app)
        .post('/payments')
        .send(payment)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('date');
          response.body.should.have.property('amount');
          done();
          console.log(response.body);
        });
    });
  });

  describe('/GET/:id payment', () => {
    it('it should GET an payment by the given id', (done) => {
      let payment = new PaymentModel({
        date: '2018-10-15T14:30:14.003Z',
        amount: 15
      });
      payment.save((error, payment) => {
        chai.request(app)
          .get('/payments/' + payment.id)
          .send(payment)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('date');
            response.body.should.have.property('amount');
            response.body.should.have.property('_id').eql(payment.id);
            done();
            console.log(response.body);
          });
      });
    });
  });

  describe('/PUT/:id payment', () => {
    it('it should UPDATE an payment by given id', (done) => {
      let payment = new PaymentModel({
        date: '2018-10-15T14:30:14.003Z',
        amount: 15
      });
      payment.save((error, payment) => {
        chai.request(app)
          .put('/payments/' + payment.id)
          .send({
            date: '2018-10-16T11:23:11.003Z',
            amount: 30
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Payment updated!');
            done();
            console.log(response.body);
          });
      });
    });
  });

  describe('/DELETE/:id payment', () => {
    it('it should DELETE a payment by given id', (done) => {
      let payment = new PaymentModel({
        date: '2018-10-15T14:30:14.003Z',
        amount: 15
      });
      payment.save((error, payment) => {
        chai.request(app)
          .delete('/payments/' + payment.id)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Payment successfully deleted!');
            done();
            console.log(response.body);
          });
      });
    });
  });
});
