const express = require('express');
const app = express(); 


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "****";
const authToken = "*****";
const client = require("twilio")(accountSid, authToken);
client.messages
  .create({ body: "Hello from Twilio", from: "+***", to: "*****" })
    .then(message => console.log(message.body));

app.listen(3000, () => console.log("Server is running on port " + 3000));
 