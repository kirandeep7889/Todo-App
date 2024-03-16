const Todo = require("../../db");

async function updateTodo(req, res) {
    const id = req.params.id; // Correctly access the id parameter from req.params
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title: req.body.title });
        // Use { new: true } to return the updated document
        if (!updatedTodo) {
            // If no todo with the provided id is found, return an error response
            return res.status(404).send("Todo not found");
        }
        res.status(200).send("Updated successfully");
    } catch (err) {
        res.status(400).send(err.message); // Send error message
    }
}

module.exports = updateTodo;
