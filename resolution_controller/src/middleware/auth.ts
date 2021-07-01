import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from 'express';

export let userAuth = (req: Request, res: Response, next: NextFunction) => {
    try{
        if(req.headers.authorization != null){
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken : any = jwt.verify(token, ''+process.env.RANDOM_TOKEN_SECRET);
            const userId = decodedToken.userId;
            if (req.body.userId && req.body.userId !== userId) {
                throw new Error('Incorrect ID');
            } else {
                next();
            }
        }
        else{
            throw new Error('Invalid request');
        }
    } catch(error){
        res.status(401).json({
            error: error.message
        });
    }
};