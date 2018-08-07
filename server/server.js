var express = require('express');
var bodyParser =require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {users} = require('./models/users');

var app = express();
app.use(bodyParser.json());
app.listen(3000, () => {

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

console.log('Starting on port 3000');
});
