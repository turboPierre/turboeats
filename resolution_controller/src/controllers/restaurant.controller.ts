import { Request, Response, NextFunction} from 'express';
import axios from 'axios';


export const getAllRestaurants = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(process.env.APP_API_IP +  'restaurants/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));
    console.log(process.env.APP_API_I + 'restaurants/');
    res.send(result)
};

export const getOneRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.get(process.env.APP_API_IP + 'restaurants/'+ itemID, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const createRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(process.env.APP_API_IP + 'restaurants/',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const updateRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.put(process.env.APP_API_IP + 'restaurants/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const deleteRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.delete(process.env.APP_API_IP + 'restaurants/' + itemID,{
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};