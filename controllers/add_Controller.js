const Todo = require("../models/Todo")

module.exports.add=(req,res)=>{
    Todo.create({
        Description:req.body.Description,
        Category:req.body.Category,
        Date:req.body.Date
    },(err,Data)=>{
            if(err)
            {
                console.log(`Error:${err}`);
            }
            
            console.log(Data);
            return res.redirect('back');
    });
}
 