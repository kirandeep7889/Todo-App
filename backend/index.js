const express=require("express");
const mongoose=require("mongoose");
const rootRoute = require("./routes/rootRoute");
const database_url="mongodb+srv://skirandeep999:Kirandeep7889@cluster0.hqrjaa0.mongodb.net/TODOS"
const cors=require("cors")
const bodyParser = require('body-parser');


const app=express();

app.use(bodyParser.json());



mongoose.connect(database_url)
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });

app.use("/api/v1",rootRoute);

app.listen("3000",()=>{
    console.log("server is running at port 3000");
})

