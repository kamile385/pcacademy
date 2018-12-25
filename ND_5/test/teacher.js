process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const TeacherModel = require('../models/teacher');

chai.should();
chai.use(chaiHttp);

describe('Teachers', () => {
  beforeEach(done => {
    TeacherModel.remove({}, error => {
      done();
      if (error) {
        console.log(error);
      }
    });
  });

  describe('/GET teacher', () => {
    it('it should get all teachers', done => {
      chai.request(app)
        .get('/teachers')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eql(0);
          done();
          console.log(response.body);
          if (error) {
            console.log(error);
          }
        });
    });
  });

  describe('/POST teacher', () => {
    it('it should post teacher', done => {
      let teacher = {
        created_at: '2018-10-15T14:30:14.003Z',
        student_name_surname: 'Name',
        parent_name_surname: 'Surname',
        address: 'Address 15',
        telephone: '+37060000000',
        email: 'email@email.com',
        group: 'group',
        identification_number: '11111111111',
        teacher: 1
      };
      chai.request(app)
        .post('/teachers')
        .send(teacher)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('created_at');
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
            console.log(error);
          }
        });
    });
  });

  describe('/GET/:id teacher', () => {
    it('it should GET an teacher by the given id', (done) => {
      let teacher = new TeacherModel({
        created_at: '2018-10-15T14:30:14.003Z',
        student_name_surname: 'Name',
        parent_name_surname: 'Surname',
        address: 'Address 15',
        telephone: '+37060000000',
        email: 'email@email.com',
        group: 'group',
        identification_number: '11111111111',
        teacher: 1
      });
      teacher.save((error, teacher) => {
        chai.request(app)
          .get('/teachers/' + teacher.id)
          .send(teacher)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('created_at');
            response.body.should.have.property('student_name_surname');
            response.body.should.have.property('parent_name_surname');
            response.body.should.have.property('address');
            response.body.should.have.property('telephone');
            response.body.should.have.property('email');
            response.body.should.have.property('group');
            response.body.should.have.property('identification_number');
            response.body.should.have.property('teacher');
            response.body.should.have.property('_id').eql(teacher.id);
            done();
            console.log(response.body);
            if (error) {
              console.log(error);
            }
          });
        if (error) {
          console.log(error);
        }
      });
    });
  });

  describe('/PUT/:id teacher', () => {
    it('it should UPDATE an teacher by given id', (done) => {
      let teacher = new TeacherModel({
        created_at: '2018-10-15T14:30:14.003Z',
        student_name_surname: 'Name',
        parent_name_surname: 'Surname',
        address: 'Address 15',
        telephone: '+37060000000',
        email: 'email@email.com',
        group: 'group',
        identification_number: '11111111111',
        teacher: 1
      });
      teacher.save((error, teacher) => {
        chai.request(app)
          .put('/teachers/' + teacher.id)
          .send({
            created_at: '2018-10-10T14:30:14.003Z',
            student_name_surname: 'Name',
            parent_name_surname: 'Surname',
            address: 'Address 10',
            telephone: '+37060000000',
            email: 'email@email.com',
            group: 'group',
            identification_number: '22222222222',
            teacher: 2
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Teacher updated!');
            done();
            console.log(response.body);
            if (error) {
              console.log(error);
            }
          });
        if (error) {
          console.log(error);
        }
      });
    });
  });

  describe('/DELETE/:id teacher', () => {
    it('it should DELETE a teacher by given id', (done) => {
      let teacher = new TeacherModel({
        created_at: '2018-10-15T14:30:14.003Z',
        student_name_surname: 'Name',
        parent_name_surname: 'Surname',
        address: 'Address 15',
        telephone: '+37060000000',
        email: 'email@email.com',
        group: 'group',
        identification_number: '11111111111',
        teacher: 1
      });
      teacher.save((error, teacher) => {
        chai.request(app)
          .delete('/teachers/' + teacher.id)
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Teacher successfully deleted!');
            done();
            console.log(response.body);
            if (error) {
              console.log(error);
            }
          });
        if (error) {
          console.log(error);
        }
      });
    });
  });
});
