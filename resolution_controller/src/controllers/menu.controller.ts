import { Request, Response, NextFunction} from 'express';
import axios from 'axios';

export const getAllMenus = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(process.env.AUTH_API_IP + 'menus/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const getOneMenu = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.get(process.env.AUTH_API_IP + 'menus/' + itemID, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const createMenu = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(process.env.AUTH_API_IP + 'menus/',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const updateMenu = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.put(process.env.AUTH_API_IP + 'menus/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const deleteMenu = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.delete(process.env.AUTH_API_IP + 'menus/'+itemID,{
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(404).send(err))

    res.send(result)
};