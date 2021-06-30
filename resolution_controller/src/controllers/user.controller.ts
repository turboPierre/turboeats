import { Request, Response, NextFunction} from 'express';
import axios from 'axios';

export const getAllUsers = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(process.env.AUTH_API_IP + 'users/', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const myInfos = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.get(process.env.AUTH_API_IP + 'users/myInfos', {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const updateUser = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.put(process.env.AUTH_API_IP + 'users/updateInfos',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};

export const signup = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(process.env.AUTH_API_IP + 'users/signup',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err));

    res.send(result)
};
export const login = async(req: Request, res: Response, next: NextFunction) => {
    const result = await axios.post(process.env.AUTH_API_IP + 'users/login',req.body, {
        headers:req.headers
    })
        .then(response => response.data)
        .catch(err => res.sendStatus(err.response.status).send(err))

    res.send(result)
};