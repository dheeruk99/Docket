//Schema of the Database

const mongoose = require('mongoose');

const TodoSchema= new mongoose.Schema({
    Description:{
        type:String,
        
    },
    Category:{
        type:String,
        
    },
    Date:{
        type:String,
        
    }
});

const Todo = mongoose.model('Todo',TodoSchema);
module.exports = Todo;

