const express = require('express');

const app = express(); 

require('dotenv').config();

const accountSid = process.env.accountSid; 
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);
const fromPhoneNumber = process.env.TWILIO_FROM_PHONE_NUMBER;
const toPhoneNumber = process.env.TWILIO_TO_PHONE_NUMBER; 

client.messages
  .create({ body: "Hello from Twilio", from: fromPhoneNumber, to: toPhoneNumber })
    .then(message => console.log(message.body));

app.listen(3000, () => console.log("Server is running on port " + 3000));
 