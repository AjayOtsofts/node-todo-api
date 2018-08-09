var express = require('express');
var bodyParser =require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {users} = require('./models/users');

var app = express();
const port =proess.env.PORT || 3000;

app.use(bodyParser.json());
app.listen(port, () => {

app.post('/todos', (req, res) => {
   var todo = new Todo({
     text :req.body.text
   });
   todo.save().then((doc) => {
     res.send(doc);
   }, (e) => {
     res.status(400).send(e);
   });
});

console.log(`Starting on port ${port}`);
});
app.get('/todos', (req, res) =>{

  Todo.find().then((todos)=>{
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  });
});
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(ObjectID.isValid(id)) {
  Todo.find({
    _id: id
  }).then((todos) => {
    res.send(todos);
  },(e) => {
    res.status(400).send(e);
  });
}
else {
  res.status(400).send("Id not Valid");
}
});

module.exports = {app};
