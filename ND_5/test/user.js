// process.env.NODE_ENV = 'test';

// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app');
// const UserModel = require('../models/user');

// chai.should();
// chai.use(chaiHttp);

// describe('Users', () => {
//   beforeEach(done => {
//     UserModel.remove({}, error => {
//       done();
//       if (error) {
//         console.log(error);
//       }
//     });
//   });

//   describe('/GET user', () => {
//     it('it should get all users', done => {
//       chai.request(app)
//         .get('/users')
//         .end((error, response) => {
//           response.should.have.status(200);
//           response.body.should.be.a('array');
//           response.body.length.should.be.eql(0);
//           done();
//           console.log(response.body);
//           if (error) {
//             console.log(error);
//           }
//         });
//     });
//   });

//   describe('/POST user', () => {
//     it('it should post user', done => {
//       let user = {
//         created_at: '2018-10-15T14:30:14.003Z',
//         student_name_surname: 'Name',
//         parent_name_surname: 'Surname',
//         address: 'Address 15',
//         telephone: '+37060000000',
//         email: 'email@email.com',
//         group: 'group',
//         identification_number: '11111111111',
//         teacher: 1
//       };
//       chai.request(app)
//         .post('/users')
//         .send(user)
//         .end((error, response) => {
//           response.should.have.status(200);
//           response.body.should.be.a('object');
//           response.body.should.have.property('created_at');
//           response.body.should.have.property('student_name_surname');
//           response.body.should.have.property('parent_name_surname');
//           response.body.should.have.property('address');
//           response.body.should.have.property('telephone');
//           response.body.should.have.property('email');
//           response.body.should.have.property('group');
//           response.body.should.have.property('identification_number');
//           response.body.should.have.property('teacher');
//           done();
//           console.log(response.body);
//           if (error) {
//             console.log(error);
//           }
//         });
//     });
//   });

//   describe('/GET/:id user', () => {
//     it('it should GET an user by the given id', (done) => {
//       let user = new UserModel({
//         created_at: '2018-10-15T14:30:14.003Z',
//         student_name_surname: 'Name',
//         parent_name_surname: 'Surname',
//         address: 'Address 15',
//         telephone: '+37060000000',
//         email: 'email@email.com',
//         group: 'group',
//         identification_number: '11111111111',
//         teacher: 1
//       });
//       user.save((error, user) => {
//         chai.request(app)
//           .get('/students/' + student.id)
//           .send(student)
//           .end((error, response) => {
//             response.should.have.status(200);
//             response.body.should.have.property('created_at');
//             response.body.should.have.property('student_name_surname');
//             response.body.should.have.property('parent_name_surname');
//             response.body.should.have.property('address');
//             response.body.should.have.property('telephone');
//             response.body.should.have.property('email');
//             response.body.should.have.property('group');
//             response.body.should.have.property('identification_number');
//             response.body.should.have.property('teacher');
//             response.body.should.have.property('_id').eql(student.id);
//             done();
//             console.log(response.body);
//             if (error) {
//               console.log(error);
//             }
//           });
//         if (error) {
//           console.log(error);
//         }
//       });
//     });
//   });

//   describe('/PUT/:id program', () => {
//     it('it should UPDATE an program by given id', (done) => {
//       let student = new StudentModel({
//         created_at: '2018-10-15T14:30:14.003Z',
//         student_name_surname: 'Name',
//         parent_name_surname: 'Surname',
//         address: 'Address 15',
//         telephone: '+37060000000',
//         email: 'email@email.com',
//         group: 'group',
//         identification_number: '11111111111',
//         teacher: 1
//       });
//       student.save((error, student) => {
//         chai.request(app)
//           .put('/students/' + student.id)
//           .send({
//             created_at: '2018-10-10T14:30:14.003Z',
//             student_name_surname: 'Name',
//             parent_name_surname: 'Surname',
//             address: 'Address 10',
//             telephone: '+37060000000',
//             email: 'email@email.com',
//             group: 'group',
//             identification_number: '22222222222',
//             teacher: 2
//           })
//           .end((error, response) => {
//             response.should.have.status(200);
//             response.body.should.be.a('object');
//             response.body.should.have.property('message').eql('Student updated!');
//             done();
//             console.log(response.body);
//             if (error) {
//               console.log(error);
//             }
//           });
//         if (error) {
//           console.log(error);
//         }
//       });
//     });
//   });

//   describe('/DELETE/:id student', () => {
//     it('it should DELETE a student by given id', (done) => {
//       let student = new StudentModel({
//         created_at: '2018-10-15T14:30:14.003Z',
//         student_name_surname: 'Name',
//         parent_name_surname: 'Surname',
//         address: 'Address 15',
//         telephone: '+37060000000',
//         email: 'email@email.com',
//         group: 'group',
//         identification_number: '11111111111',
//         teacher: 1
//       });
//       student.save((error, student) => {
//         chai.request(app)
//           .delete('/students/' + student.id)
//           .end((error, response) => {
//             response.should.have.status(200);
//             response.body.should.be.a('object');
//             response.body.should.have.property('message').eql('Student successfully deleted!');
//             done();
//             console.log(response.body);
//             if (error) {
//               console.log(error);
//             }
//           });
//         if (error) {
//           console.log(error);
//         }
//       });
//     });
//   });
// });
