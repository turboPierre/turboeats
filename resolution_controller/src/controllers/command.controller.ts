import { Request, Response, NextFunction} from 'express';
import axios from 'axios';
import {APP_API_IP} from '../config/config';

export const delivererCommand = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(APP_API_IP + 'commands/delivererCommand', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};

export const userCommands = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(APP_API_IP + 'commands/userCommands', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};

export const restaurantCommand = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.get(APP_API_IP + 'commands/restaurantCommand' + itemID, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};

export const getAllCommands = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(APP_API_IP + 'commands/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};

export const getOneCommand = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.get(APP_API_IP + 'commands/id=' + itemID, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};

export const createCommand = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(APP_API_IP + 'commands/',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};

export const updateCommand = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.put(APP_API_IP + 'commands/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};

export const deleteCommand = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.delete(APP_API_IP + 'commands/' + itemID,{
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};