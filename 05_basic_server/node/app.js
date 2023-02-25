import express from "express"; 
const app = express(); 
import fs from "fs" 




//Yaml, txt, json

app.get("/txt", (req, res) => {
    
    
    // Read the TXT file
    const txtData = fs.readFileSync('./files/test.txt', 'utf8');

    // Convert the TXT data to a JavaScript object
    var textByLine = txtData.split(",")

    // Write the JSON data to a new file
    fs.writeFileSync('./files/convertertoJson/txtTo.json', JSON.stringify(textByLine));
    
        for (let key in textByLine) 
            `${key}: ${textByLine[key]}`;
            
        
    

    res.send(textByLine)

}); 


app.get("/yaml", (req, res) => {
    
    // Read the TXT file
    const txtData = fs.readFileSync('./files/test.yaml', 'utf8');

    // Convert the TXT data to a JavaScript object
    var textByLine = txtData.split(",")

    // Write the JSON data to a new file
    fs.writeFileSync('./files/convertertoJson/yamlTo.json', JSON.stringify(textByLine));
    
        for (let key in textByLine) 
            `${key}: ${textByLine[key]}`;
            

    res.send(textByLine)

});


app.get("/json", (req, res) => {
    
    // Read the TXT file
    const txtData = fs.readFileSync('./files/test.json', 'utf8');

    // Convert the TXT data to a JavaScript object
    var textByLine = txtData.split(",")

    // Write the JSON data to a new file
    fs.writeFileSync('./files/convertertoJson/jsonTo.json', JSON.stringify(textByLine));
    
        for (let key in textByLine) 
            `${key}: ${textByLine[key]}`;
            

    res.send(textByLine)

});



app.listen(8080, () => console.log("Server is now running on port: " + 8080));

