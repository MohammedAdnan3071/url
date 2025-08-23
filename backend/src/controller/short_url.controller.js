import { generateNanoId } from "../utils/helper.js";
import { createShortUrlServiceWithoutUser } from "../services/short_url.service.js";
import urlSchema from "../models/short_url.model.js"
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async(req,res)=>{
    
        const {url }=req.body; //get the URL sent from the client
        const shortUrl =  await createShortUrlServiceWithoutUser(url);
        res.send(process.env.APP_URL + shortUrl);
    
})


export const redirectFromShortUrl = wrapAsync(async(req,res)=>  {

        const {id} =req.params;
        const url = await getShortUrl(id);
        if(!url) throw new Error("Short URL not found");
        res.redirect(url.full_url);
    });