const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ab163f1279385202329b63e11';
//
// if (!ObjectId.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//
//   console.log(('Todo by id'), todo);
// }).catch((e) => console.log(e));

//
var userId = '5ab010de2c64edfc3e50934a';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log('User', user);
}).catch((e) => console.log('Error occured', e));
