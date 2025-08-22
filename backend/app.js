import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js"
import Urlschema from "./src/models/shortUrl.model.js"




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
    const {url }=req.body; //get the URL sent from the client
    const shortUrl = nanoid(7); // generates a unique short id 
    const newUrl = new Urlschema({ // create a new MongoDB schema
        full_url:url, 
        short_url:shortUrl
    });
    newUrl.save() // save it into the db
    console.log(url);
    res.send(nanoid(7)); // send a new Random ID back to the client
});
















app.listen(PORT,()=>{
    connectDB()
    console.log(`Server running on PORT:${PORT}`)
})