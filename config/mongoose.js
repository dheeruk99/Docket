const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Todo_db');

const db = mongoose.connection;

db.on('err',console.error.bind('console','Error conncecting to Db'));

db.once('open',()=>{
    console.log('Successfully connected to db');
})
