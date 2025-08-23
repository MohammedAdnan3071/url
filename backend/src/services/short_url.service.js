import { generateNanoId } from "../utils/helper";





export const createShortUrlService = (url) =>{
const shortUrl = generateNanoId(7);
    const newUrl = new urlSchema({ // create a new MongoDB schema
        full_url:url, 
        short_url:shortUrl
    });
     newUrl.save() // save it into the db
    console.log(url);
    res.send(nanoid(7)); // send a new Random ID back to the client

}