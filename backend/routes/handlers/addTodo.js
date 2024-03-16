const Todo = require("../../db");

async function addTodo(req,res) {
    try{
        const todo=await Todo.create({
            title : req.body.title,
           })    
           res.status(200).send(todo);
    }catch (err) {
        res.status(404).send("error while creating todo")
    }

}


module.exports=addTodo;