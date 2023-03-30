import express from 'express';
import fs from 'fs';

const router = express.Router();

router.post('/webhooks/:event', (req, res) => {
  const { event } = req.params;
  const { url, eventType} = req.body;

  // Read the existing webhooks from the file
  const webhooks = JSON.parse(fs.readFileSync('webhooks.json', 'utf8'));

  // Add the new webhook to the list of webhooks for the specified event
  if (!webhooks[eventType]) {
    webhooks[eventType] = [];
  }
  webhooks[eventType].push(url);

  // Write the updated webhooks list back to the file
  fs.writeFileSync('webhooks.json', JSON.stringify(webhooks));

  res.status(200).send(`Webhook registered for event '${event}': ${url}`);
  res.send({});
});

router.delete('/webhooks/:event', (req, res) => {
  const { event } = req.params;
  const { url } = req.body;

  // Read the existing webhooks from the file
  const webhooks = JSON.parse(fs.readFileSync('webhooks.json', 'utf8'));

  // Remove the specified webhook from the list of webhooks for the specified event
  if (webhooks[event]) {
    webhooks[event] = webhooks[event].filter((webhook) => webhook !== url);
  }

  // Write the updated webhooks list back to the file
  fs.writeFileSync('webhooks.json', JSON.stringify(webhooks));

  res.status(200).send(`Webhook unregistered for event '${event}': ${url}`);
});

export default router;
