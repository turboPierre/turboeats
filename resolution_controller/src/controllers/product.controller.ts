import { Request, Response, NextFunction} from 'express';
import axios from 'axios';
import {APP_API_IP} from '../config/config';

export const getAllProducts = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(APP_API_IP + 'products/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const getOneProduct = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.get(APP_API_IP + 'products/' + itemID, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const createProduct = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(APP_API_IP + 'products/',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const updateProduct = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.put(APP_API_IP + 'products/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const deleteProduct = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.delete(APP_API_IP + 'products/' + itemID,{
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(404).send(err))

    res.send(result)
};