import express from "express";
import twilio from "twilio";
import dotenv from "dotenv";
const app = express();

dotenv.config();


function sendSMS() {
    try{
        const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
        
        return client.messages
        .create({body: "Hey this is a message from Alexander", from: process.env.PHONE_NUMBER, to: process.env.PHONE_NUMBER})
        .then(message => console.log(message + " was sent successfully"));
    
    } catch(err) {
        console.log(err);
    }
}; 


sendSMS();

app.listen(3000, () => console.log("Server is running on port " + 3000));
