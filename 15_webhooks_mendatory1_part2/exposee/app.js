import express from "express";
import module from "module";
import fs from "fs"
import webhooksRouter from "./webhooks.js"

const app = express(); 
const EVENTS_FILE = "./registered_endpoints.txt"


app.use(express.json());
app.use(webhooksRouter);

// Function to save events to file
function saveEvent(event, endpoint) {
  fs.appendFileSync(EVENTS_FILE, `${event}:${endpoint}\n`);
}

// Function to read events from file
function readEvents() {
  let events = {};
  if (!fs.existsSync(EVENTS_FILE)) {
    return events;
  }
  const data = fs.readFileSync(EVENTS_FILE, 'utf8');
  const lines = data.trim().split('\n');
  for (const line of lines) {
    const [event, endpoint] = line.split(':');
    if (event in events) {
      events[event].push(endpoint);
    } else {
      events[event] = [endpoint];
    }
  }
  return events;
}

// Endpoint to register a webhook
app.post('/register', (req, res) => {
  const { event, endpoint } = req.body;
  if (!event || !endpoint) {
    return res.status(400).json({ message: 'Missing event or endpoint' });
  }
  saveEvent(event, endpoint);
  
  return res.json({ message: `Webhook for ${event} registered with endpoint ${endpoint}` });
});

// Endpoint to unregister a webhook
app.post('/unregister', (req, res) => {
  const { event, endpoint } = req.body;
  if (!event || !endpoint) {
    return res.status(400).json({ message: 'Missing event or endpoint' });
  }
  let events = readEvents();
  if (!(event in events) || !events[event].includes(endpoint)) {
    return res.status(404).json({ message: 'Webhook not found' });
  }
  events[event] = events[event].filter(ep => ep !== endpoint);
  const data = Object.entries(events).map(([e, eps]) => eps.map(ep => `${e}:${ep}`).join('\n')).join('\n');
  fs.writeFileSync(EVENTS_FILE, data);
  return res.json({ message: `Webhook for ${event} unregistered with endpoint ${endpoint}` });
});


const PORT  = 3000
app.listen(PORT, () => console.log("Server is running on port ", PORT))


module.exports = app;
