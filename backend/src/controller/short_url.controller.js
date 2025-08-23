import { generateNanoId } from "../utils/helper.js";
import { createShortUrlServiceWithoutUser } from "../services/short_url.service.js";
import urlSchema from "../models/short_url.model.js"
import { getShortUrl } from "../dao/short_url.js";

export const createShortUrl = async (req,res)=>{
    try{
        const {url }=req.body; //get the URL sent from the client
        const shortUrl =  await createShortUrlServiceWithoutUser(url);
        res.send(process.env.APP_URL + shortUrl);
    }catch(err){
        next(err);
    }
}


export const redirectFromShortUrl = async(req, res)=>{
    const {id} =req.params;
    const url = await getShortUrl(id);
    if(url){
        res.redirect(url.full_url)
    }else{
        res.status(404).send("Not found");
    }
}