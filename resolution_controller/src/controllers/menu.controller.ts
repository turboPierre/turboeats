import { Request, Response, NextFunction} from 'express';
import axios from 'axios';
import {APP_API_IP} from '../config/config';

export const getAllMenus = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(APP_API_IP + 'menus/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const getOneMenu = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.get(APP_API_IP + 'menus/' + itemID, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const createMenu = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(APP_API_IP + 'menus/',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.status(201).send(result)
};

export const updateMenu = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.put(APP_API_IP + 'menus/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const deleteMenu = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.delete(APP_API_IP + 'menus/'+itemID,{
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};