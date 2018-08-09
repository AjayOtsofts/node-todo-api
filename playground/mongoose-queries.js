const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {ObjectID} = require('mongodb');


var id = '5b6828dc01b038223e7ddd84';

if(ObjectID.isValid(id)) {
  console.log('Id is Valid',id);
}

Todo.find({

}).then((Todos) => {
  console.log('Todos' ,Todos);
});

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos' ,todos);
});

Todo.findOne({
  _id: id
}).then((todos) => {
  console.log('Todos' ,todos);
},(e) => {
  if(e){
    console.log(e);
  }
});

Todo.findById(id).then((todo) => {
  console.log('Todos' ,todo);
});
