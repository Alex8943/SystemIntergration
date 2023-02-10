

//CSV file reading and parsing it to an array. 
const fs = require("fs")
const { parse } = require("csv-parse")
const data = [];

fs.createReadStream("./files/test.csv")
.pipe(
  parse({ 
    delimiter: ",", 
    columns: true,
    ltrim: true,
  }
  
)).on("data",function (row) {
  data.push(row);
  
}).on("error", function (error) {
  console.log(error.message);

}).on("end", function () {
  console.log("parsed csv data:");
  console.log(data);
});

//________________________________________

//Reading and parsing my Json file 

const newFs = require('fs'); 

newFs.readFile('./files/test.json', 'utf-8', (err, jsonString) => {
  if(err){
    console.log(err);
  }else{
    try{
    const data = JSON.parse(jsonString)
    console.log(data)
    }catch(err){
      console.log("Error parsing JSON", err)
    }
  }
}); 


//________________________________________

//Reading and parsing my txt file. 

const txtFs = require('fs');

txtFs.readFile('./files/test.txt', 'utf8', (err, csvJsonString) => {
  if(err){
    console.error(err)
  }else{
    var text = txtFs.readFileSync('./files/test.txt', 'utf8');
    var textByLine = text.split(",")
    console.log(textByLine)
  }
}); 


//________________________________________

//Reading and parsing my xml file. 

 const xmlFs = require('fs'); 

xmlFs.readFile('./files/test.xml', 'utf8', (err, data) => {
  if(err){
    console.error(err)
  } else{
    console.log("before parsing: \n" + data)
    var text = xmlFs.readFileSync('./files/test.xml', 'utf8');
    var textByLine = text.split(",")
    console.log(textByLine)
  }
});  

//________________________________________

//Reading and parsing my xml file. 


const yamlFs = require('fs'); 

yamlFs.readFile('./files/test.yaml', 'utf8', (err, data) => {
  if(err){
    console.error(err)
  } else{
    console.log("before parsing: \n" + data)
    var text = yamlFs.readFileSync('./files/test.yaml', 'utf8');
    var textByLine = text.split(",")
    console.log(textByLine)
  }
});