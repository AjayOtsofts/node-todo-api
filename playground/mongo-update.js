const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to database');
  }
  console.log('You are now connected to database');

//deleteManay
db.collection('Todos').findOneAndUpdate({age : 29},{
  $set: {
    name: 'Ajay',
    age: 35
  }},{
    returnOriginal: false
  }
).then((result)=>{
console.log(result);
});
//deleteone
//find one and deleteone


  db.close();
});
