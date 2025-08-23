import shortUrl from "../models/short_url.model.js";
import urlSchema from "../models/short_url.model.js"

export const saveShortUrl = async (shortUrl, longUrl, userId) =>{
    
    const newUrl = new urlSchema({ // create a new MongoDB schema
        full_url:longUrl, 
        short_url:shortUrl
    });
    if(userId){
        newUrl.user_id = userId
    }
     newUrl.save() // save it into the db
}

export const getShortUrl = async (shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}})
}