import { Request, Response, NextFunction} from 'express';
import axios from 'axios';
import {APP_API_IP} from '../config/config';

export const getAllRestaurants = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(APP_API_IP +  'restaurants/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));
    res.send(result)
};

export const getOneRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.get(APP_API_IP + 'restaurants/id='+ itemID, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const getUserRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(APP_API_IP + 'restaurants/userRestaurant', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const createRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(APP_API_IP + 'restaurants/',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const updateRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.put(APP_API_IP + 'restaurants/' + itemID,req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};

export const deleteRestaurant = async(req: Request, res: Response, next: NextFunction) => {
    const itemID: string = req.params.id;
    const result = await axios.delete(APP_API_IP + 'restaurants/' + itemID,{
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status));

    res.send(result)
};