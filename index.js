const express = require('express');
const port = 8080;
const path = require("path");
const db=require('./config/mongoose');
const Todo=require('./models/Todo');
const app = express();
const bodyparser  = require('body-parser');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assets'));
app.use(bodyparser.urlencoded({extended:'false'}));



app.use('/',require('./routes'));
app.listen(port,(err)=>{
    if(err)
    {
       return console.log('Error in Starting Server');
    }
    return console.log(`Server is successfully running on port:${port}`);
})