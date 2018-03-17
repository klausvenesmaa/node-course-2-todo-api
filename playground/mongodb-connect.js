//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }

  console.log('Connected to mongodb server.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do ',
  //   completed: false
  // }, (err, results) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(results.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Klaus',
  //   age: 36,
  //   location: 'Helsinki'
  // }, (err, results) => {
  //   if (err) {
  //     console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(results.ops[0]._id.getTimestamp());
  // })

  db.close();
});
