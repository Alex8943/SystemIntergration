const express = require('express');
const app = express(); 


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC6936b1eb7662f0b39efa1b1a2f3e7f55";
const authToken = "2d8bc79d275f54fc47643d0ecee07380"
const client = require("twilio")(accountSid, authToken);
client.messages
  .create({ body: "Hello from Twilio", from: "+16813293524", to: "+4550694489" })
    .then(message => console.log(message.body));

app.listen(3000, () => console.log("Server is running on port " + 3000));
 