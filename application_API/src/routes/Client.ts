const express = require('express');

const Client = require('../models/Client');

const router = express.Router();

// GET /client
router.get('/client', async (req, res) => {
  try {
    const clients = await Client.find();

    res.status(200).send({ clients });
  } catch (error) {
    console.log(error);
  }
});

// GET /client/:clientId
router.get('/todo/:clientid', async (req, res) => {
  const clientId = req.params.clientId;

  try {
    const client = await Client.findById(clientId);

    res.status(200).send({ client });
  } catch (error) {
    console.log(error);
  }
});

// POST /client
router.post('/client', async (req, res) => {
  const newClient = Client({ title: req.body.title });

  try {
    const savedClient = await newClient.save();

    res.status(201).send({ client: savedClient });
  } catch (error) {
    console.log(error);
  }
});

// PUT /todo/:clientId
router.put('/todo/:clientId', async (req, res) => {
  const clientId = req.params.clientId;

  try {
    const client = await Client.findById(clientId);

    client.id = req.body.id;

    const savedClient = await client.save();

    res.status(200).send({ todo: savedClient });
  } catch (error) {
    console.log(error);
  }
});

// DELETE /todo/:clientId
router.delete('/todo/:clientId', async (req, res) => {
  const clientId = req.params.todoId;

  try {
    await Client.findByIdAndRemove(clientId);

    res.status(200).send({ message: 'Deleted !' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;