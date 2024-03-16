const Todo = require('../../db'); // Assuming db.js is in the parent directory

async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (err) {
    res.status(500).send("Error fetching todos");
  }
}

module.exports = getAllTodos;
