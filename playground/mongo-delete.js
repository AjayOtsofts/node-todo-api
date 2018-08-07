const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to database');
  }
  console.log('You are now connected to database');

//deleteManay
db.collection('Todos').findOneAndDelete({age >: 29}).then((result)=>{
console.log(result);
});
//deleteone
//find one and deleteone


  db.close();
});
