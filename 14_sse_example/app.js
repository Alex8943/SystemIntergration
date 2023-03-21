import express from 'express';
import path from 'path';

const app = express();

app.use(express.static("public"));

// Set up SSE endpoint
app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

    // Send a ping approx every 5 seconds
    setInterval(() => {
        sendTimeToClient(res);
    }, 5000);
});

function sendTimeToClient(res) {
    const time = new Date().toTimeString();
    res.write(`data: ${time}\n\n`);
}


// Start the server
app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
