const Todo = require("../../db");

async function toggleTodo(req,res) {
    const id = req.params.id;

    try {
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        todo.completed = !todo.completed;
        await todo.save();

        res.status(200).json({ message: 'Todo status toggled successfully', todo });
    } catch (error) {
        res.status(500).json({ message: 'Error toggling todo status', error });
    }
}


module.exports=toggleTodo;