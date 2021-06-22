/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import * as ClientController from '../controllers/client.controller';

/**
 * Router Definition
 */

export const clientRouter = express.Router();


/**
 * Controller Definitions
 */

// GET clients/
clientRouter.get('/', ClientController.getAllClients)

// GET clients/:id
clientRouter.get('/:id', ClientController.getOneClient);

// POST clients/
clientRouter.post('/', ClientController.createClient);

// PUT clients/:id
clientRouter.put('/:id', ClientController.updateClient);

// DELETE clients/:id
clientRouter.delete('/:id', ClientController.deleteClient);