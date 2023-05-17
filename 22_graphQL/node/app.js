import express from "express"; 
import fs from "fs";
import {load} from "cheerio";




const page = fs.readFileSync("proshop.html", "utf-8");
const $ = load(page);

$("#products [product]").each((index, element) => {
    //const name = $(element).find("[product-display-name]").text();
    const name = $(element).find(".product-link h2").text();
    const price = $(element).find(".site-currency-lg").text();
    console.log(price, "===", name);
});




// const response = await fetch("https://www.proshop.dk/Baerbar-computer");
// const result = await response.text();
// fs.writeFileSync("proshop.html", result)

const app = express();
app.listen(3000, () => console.log("Server on port 3000"));