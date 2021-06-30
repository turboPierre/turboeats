import { Request, Response, NextFunction} from 'express';
import axios from 'axios';

export const getAllCommands = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(process.env.APP_API_IP + 'commands/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const getOneCommand = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.get(process.env.APP_API_IP + 'commands/' + itemID, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const createCommand = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(process.env.APP_API_IP + 'commands/',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const updateCommand = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.put(process.env.APP_API_IP + 'commands/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const deleteCommand = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.delete(process.env.APP_API_IP + 'commands/' + itemID,{
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};