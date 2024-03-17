const Todo = require("../../db");

async function deleteTodo(req, res) {
    const id = req.params.id; 
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).send("Todo not found");
        }
        res.status(200).send("Deleted todo successfully");
    } catch (err) {
        res.status(400).send(err.message); 
    }
}

module.exports = deleteTodo;
