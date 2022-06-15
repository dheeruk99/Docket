const { on } = require("../models/Todo");
const Todo = require("../models/Todo")

module.exports.delete=(req,res)=>{
    let id = req.body.Description;
        Todo.findByIdAndDelete(id,(err)=>{
            if(err)
            {
            console.log(`Error in Deletion${err}`);
            }
        })
        res.redirect('back');
            
    }
