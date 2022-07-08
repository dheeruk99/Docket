//Controller for Deleting a Task

const Todo = require("../models/Todo")

module.exports.delete=(req,res)=>{
    let id = req.body.Description;
    Object.keys(req.body).forEach(function(key){
        Todo.findByIdAndDelete(key,function(err){
            if(err)
            {
                console.log("Error");
                return;
            }
        })
        
    })
    return res.redirect('back');
}



    