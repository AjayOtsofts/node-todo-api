const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to database');
  }
  console.log('You are now connected to database');

  var rest = db.collection('Todos').find({name: 'Ajay Yadav'}).count().then((count) => {

     console.log('Todos');
     console.log(count);
  }, (err)=> {

    console.log('Encountered Db error');
  });

  db.close();
});
