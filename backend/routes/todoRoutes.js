const express=require("express");
const todoRoutes=express.Router();
const addTodo = require("./handlers/addTodo");
const updateTodo = require("./handlers/updateTodo");
const deleteTodo = require("./handlers/deleteTodo");
const getAllTodos = require("./handlers/getAllTodos");
const toggleTodo = require("./handlers/toggleTodo");

//all routes
todoRoutes.get("/bulk",getAllTodos);
todoRoutes.post("/", addTodo);
todoRoutes.put("/:id" ,updateTodo);
todoRoutes.put('/:id/toggle',toggleTodo);
todoRoutes.delete("/:id" , deleteTodo);


module.exports=todoRoutes