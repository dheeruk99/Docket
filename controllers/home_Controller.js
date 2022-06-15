const Todo = require("../models/Todo")

module.exports.home=(req,res)=>{
    Todo.find({},(err,Data)=>{
        if(err)
        {
            console.log(err);
        }
        return res.render('home',{
            todo_list:Data
        })
    })
};