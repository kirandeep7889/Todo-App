const Todo = require("../../db");

async function updateTodo(req, res) {
    const id = req.params.id; 
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title: req.body.title });
        if (!updatedTodo) {
            return res.status(404).send("Todo not found");
        }
        res.status(200).send("Updated successfully");
    } catch (err) {
        res.status(400).send(err.message); 
    }
}

module.exports = updateTodo;
