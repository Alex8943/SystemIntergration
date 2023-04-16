import express from "express";
import mysql from "mysql"; 
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


async function connection(){
  try 
  {
    
    const connection = mysql.createConnection({
      host: '127.0.0.1',
      user: 'Test',
      port: 1433,
      password: '12345',
      database: 'UserDB'
    });
      
    // Connect to the database
    connection.connect();
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database: ' + error.stack);
  }
}

//I want to return a html file from the server

  app.use(express.static(__dirname + "/public"));


connection();



app.listen(8080, () => console.log("Client is running on port 8080"));
