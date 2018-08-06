const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to database');
  }
  console.log('You are now connected to database');
  db.collection('Todos').insertOne({

    name: 'Ajay Yadav',
    age: 29,
    occupation: 'Bussiness'

  }, (err, result) =>{

  if(err){
    return console.log('Unable to insert', err);
  }
  
  console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
