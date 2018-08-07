const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todos');

beforeEach((done) => {
  Todo.remove({}).then(()  => done());
});

describe('POST  /todos', () => {

  it('should create a new todo data', (done) => {

    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
         if(err) {
           return done(err);
         }
        Todo.find().then((todos) => {
          expect(todos.lenght).toBe(undefined);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });
});
