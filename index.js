require("dotenv").config();
const express =require("express");
const port=process.env.PORT;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testdbs")

const studentRouter=require("./routes/student.routes");

app.use("/api/students",studentRouter);

app.listen(port,()=>{console.log(`App is listening at the port ${port}`)});

               


