const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todos');

const todos = [{
  text: 'First Item'
},{
  text: 'Second Item'
},{
  text: 'Third Item'
}];

beforeEach((done) => {
  Todo.remove({}).then(()  => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST  /todos', () => {

  it('should create a new todo data', (done) => {

    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        //console.log(res.body);
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
         if(err) {
           return done(err);
         }
        Todo.find({text: text, completed: false}).then((todos) => {
          expect(todos.lenght).toBe(undefined);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {

  it('Should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        //expect(res.body.todos.completed).toBe(2);
      })
      .end(done);
  });
});
