// process.env.NODE_ENV = 'test';

// const chai = require('chai');
// const chaiHtpp = require('chai-http');
// const app = require('../app');
// const CONFIG = require('../config');
// const AttendanceModel = require('../models/attendance');

// chai.should();
// chai.use(chaiHtpp);

// describe('Attendance', () => {

// //     beforeEach(done => {
// //         AttendanceModel.remove({}, err=>{
// //             done();
// //         });

       
// //    });

//     describe('/GET', () => {
//     it('it should return attendance array', done => {
//         chai.request(app)
//             .get('/attendance')
//             .end((error, response)=> {
//                 response.should.have.status(200);
//                 done();
//             });
//         });
//     });

//     describe('/CREATE', () => {
//     it('it should return attendance', done => {
//         chai.request(app)
//             .post('/attendance')
//             .send({
//                 'date': '2018-12-03',
//                 'status': '+',
//                 'remark' : ''
//               })
//             .end((error, response)=> {
//                 // response.body.should.have.property('date', '2018-12-03');
//                 done();
//             });
//         });
//     });

//     describe('/DELETE', () => {
//         it('it should return attendance', done => {
//             chai.request(app)
//                 .delete('/attendance')
//                 .send({
//                     '_id': '5c0c3bacce74302be0e320cb'
//                   })
//                 .end((error, response)=> {
//                     response.should.have.status(200);
//                     done();
//                 });
//         });
//     });
// });