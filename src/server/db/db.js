var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todos', {useMongoClient: true});

var Todo = mongoose.model('Todo', {
   task: String,
   isCompleted: Boolean,
   isEditing: Boolean 
});

module.exports.Todo = Todo;