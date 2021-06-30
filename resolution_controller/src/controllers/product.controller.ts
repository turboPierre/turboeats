import { Request, Response, NextFunction} from 'express';
import axios from 'axios';

export const getAllProducts = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(process.env.AUTH_API_IP + 'products/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const getOneProduct = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(process.env.AUTH_API_IP + 'products/myInfos', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const createProduct = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.post(process.env.AUTH_API_IP + 'products/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const updateProduct = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.put(process.env.AUTH_API_IP + 'products/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

// TODO headers ?
export const deleteProduct = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.delete(process.env.AUTH_API_IP + 'products/' + itemID,req.body)
        .then(response => response.data)
        .catch(err => res.sendStatus(404).send(err))

    res.send(result)
};