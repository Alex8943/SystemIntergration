import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const url = "https://www.ditur.dk/herre/ure"

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html); 
        

        $('.product-item-title', html).each(function() {
            const title = $(this).text();
            const price = $('.price-wrapper').text();
       
            console.log(title);
            console.log(price);
    })
    console.log(articles);
    
}).catch(err => console.log(err));

const app = express();
app.listen(3000, () => {console.log("Server is running on port 3000")});