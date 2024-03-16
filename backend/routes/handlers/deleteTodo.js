const Todo = require("../../db");

async function deleteTodo(req, res) {
    const id = req.params.id; // Correctly access the id parameter from req.params as a string
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            // If no todo with the provided id is found, return an error response
            return res.status(404).send("Todo not found");
        }
        res.status(200).send("Deleted todo successfully");
    } catch (err) {
        res.status(400).send(err.message); // Send error message
    }
}

module.exports = deleteTodo;
