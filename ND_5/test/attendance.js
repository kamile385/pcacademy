process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const AttendanceModel = require('../models/attendance');

chai.should();
chai.use(chaiHtpp);

describe('Attendance', () => {

    beforeEach(done => {
        AttendanceModel.remove({}, err=>{
            done();
        });       
   });

    describe('/GET', () => {
    it('it should return attendance', done => {
        chai.request(app)
            .get('/attendances')
            .end((error, response)=> {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.be.a('array');
                done();
            });
        });
    });

    describe('/CREATE', () => {
    it('it should create attendance', done => {
        chai.request(app)
            .post('/attendances')
            .send({
                '_id': '1',
                'date': '2018-12-03',
                'status': '+',
                'remark' : ''
              })
            .end((error, response)=> {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('_id');
                response.body.should.have.property('date');
                response.body.should.have.property('status');
                response.body.should.have.property('remark');
                response.body._id.should.equal('1');
                done();
            });
        });
    });

    describe('/DELETE', () => {
        it('it should return attendance', done => {
            chai.request(app)
                .delete('/attendance')
                .send({
                    '_id': request.body._id
                  })
                .end((error, response)=> {
                    response.should.have.status(200);
                    done();
                });
        });
    });
});