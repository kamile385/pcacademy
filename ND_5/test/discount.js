process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const DiscountModel = require('../models/discount');

chai.should();
chai.use(chaiHttp);

describe('Discounts', () => {
  beforeEach(done => {
    DiscountModel.remove({}, error => {
      done();
    });
  });

  describe('/GET discount', () => {
    it('it should get all discount', done => {
      chai.request(app)
        .get('/discounts')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eql(0);
          done();
          console.log(response.body);
        });
    });
  });

  describe('/POST discount', () => {
    it('it should post discount', done => {
      let discount = {
        state_financing: true,
        praise: false,
        not_first_year: false,
        second_program: false
      };
      chai.request(app)
        .post('/discounts')
        .send(discount)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('state_financing');
          response.body.should.have.property('praise');
          response.body.should.have.property('not_first_year');
          response.body.should.have.property('second_program');
          done();
          console.log(response.body);
        });
    });
  });

  describe('/GET/:id discount', () => {
    it('it should GET an discount by the given id', (done) => {
      let discount = new DiscountModel({ state_financing: true, praise: false, not_first_year: false, second_program: false });
      discount.save((error, discount) => {
        chai.request(app)
          .get('/discounts/' + discount.id)
          .send(discount)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('state_financing');
            response.body.should.have.property('praise');
            response.body.should.have.property('not_first_year');
            response.body.should.have.property('second_program');
            response.body.should.have.property('_id').eql(discount.id);
            done();
            console.log(response.body);
          });
      });
    });
  });

  describe('/PUT/:id discount', () => {
    it('it should UPDATE an discount by given id', (done) => {
      let discount = new DiscountModel({ state_financing: true, praise: false, not_first_year: false, second_program: false });
      discount.save((error, discount) => {
        chai.request(app)
          .put('/discounts/' + discount.id)
          .send({ state_financing: false, praise: false, not_first_year: false, second_program: false })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Discount updated!');
            done();
            console.log(response.body);
          });
      });
    });
  });

  describe('/DELETE/:id discount', () => {
    it('it should DELETE a discount by given id', (done) => {
      let discount = new DiscountModel({ state_financing: false, praise: false, not_first_year: false, second_program: false });
      discount.save((error, discount) => {
        chai.request(app)
          .delete('/discounts/' + discount.id)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Discount successfully deleted!');
            done();
            console.log(response.body);
          });
      });
    });
  });
});
