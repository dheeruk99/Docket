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

// app.get('/',(req,res)=>{
//     Todo.find({},(err,Todos)=>{
//         if(err){
//             return console.log('err');
//         }
//     res.render('home',{
//         todo_list:Todos
//     });
// });
//  })
// app.post('/home',(req,res)=>{
//     Todo.create({
//             Description:req.body.Description,
//             Category:req.body.Category,
//             Date:req.body.Date
//     },(err,Data)=>{
//         if(err)
//         {
//             console.log(`Error : ${err}`);
//         }
//         console.log(Data);
//         return res.redirect('back');
//     });

//});


app.use('/',require('./routes'));
app.listen(port,(err)=>{
    if(err)
    {
       return console.log('Error in Starting Server');
    }
    return console.log(`Server is successfully running on port:${port}`);
})