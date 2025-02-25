import express from "express"
import { dbConnect } from "./config/dbConfig.js";
import userRoute from "./routes/users.js"


const app=express();

app.get("/",(req,res)=>{
    res.send("Server running")
})

app.use('/api/user',userRoute)

app.listen(8080,()=>{
    console.log("Server running in 8080");
    dbConnect();
})