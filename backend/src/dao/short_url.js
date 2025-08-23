import shortUrl from "../models/short_url.model.js";
import urlSchema from "../models/short_url.model.js"
import { ConfictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) =>{
    try{
        const newUrl = new urlSchema({ // create a new MongoDB schema
            full_url:longUrl, 
            short_url:shortUrl
        });
        if(userId){
            newUrl.user_id = userId
        }
        await newUrl.save() // save it into the db
    }catch(err){
        if(err.code == 11000){
            throw new ConfictError("Short URL already exists")
        }
        throw new Error(err);
    }
}

export const getShortUrl = async (shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}})
}