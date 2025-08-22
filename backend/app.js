import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import Database from "./src/config/mongo.config.js"





const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
const PORT = 3000; 



app.get("/", (req, res)=>{
    res.send("Hello world from get request")
});

//GET - Redirection 
// POST - creating the short urls


app.post("/api/create", (req,res)=>{
    const {url }=req.body;
    console.log(url);
    res.send(nanoid(7)); // generating urls 
});
















app.listen(PORT,()=>{
    Database()
    console.log(`Server running on PORT:${PORT}`)
})