import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js"
import urlSchema from "./src/models/short_url.model.js"
import short_url from "./src/routes/short_url.route.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
const PORT = 3000; 



app.get("/", (req, res)=>{
    res.send("Hello world from get request")
});
 
// GET - Redirection 
app.get("/:id", redirectFromShortUrl)

// POST - creating the short urls
app.use("/api/create", short_url);

app.use(errorHandler)














app.listen(PORT,()=>{
    connectDB()
    console.log(`Server running on PORT:${PORT}`)
})