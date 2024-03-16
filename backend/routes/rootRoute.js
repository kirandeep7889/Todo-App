const express=require("express");
const todoRoutes = require("./todoRoutes");

const rootRoute=express.Router();

rootRoute.use("/todo",todoRoutes);


module.exports= rootRoute



