import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js"
import urlSchema from "./src/models/short_url.model.js"
import short_url from "./src/routes/short_url.route.js"


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
const PORT = 3000; 



app.get("/", (req, res)=>{
    res.send("Hello world from get request")
});

//GET - Redirection 
app.get("/:id", async(req, res)=>{
    const {id} =req.params;
    const url = await urlSchema.findOne({short_url:id});
    if(url){
        res.redirect(url.full_url)
    }else{
        res.status(404).send("Not found");
    }
})











// POST - creating the short urls
app.post("/api/create", short_url);
















app.listen(PORT,()=>{
    connectDB()
    console.log(`Server running on PORT:${PORT}`)
})