const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: ''}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5ab6369f6ea3f1060d12f6a0').then((todo) => {
  console.log(todo);
});
