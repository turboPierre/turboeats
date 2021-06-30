import Restaurant, { RestaurantInterface } from '../models/restaurant.model';
import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


export let getAllRestaurants = (req: Request, res: Response, next: NextFunction) => {

    Restaurant.find()
        .then((restaurants) => {
            res.status(200).send(restaurants);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getOneRestaurant = (req: Request, res: Response, next: NextFunction) => {

    Restaurant.findOne({ _id: req.params.id })
        .then((restaurant) => {
            res.status(200).send(restaurant);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getUserRestaurant = (req: Request, res: Response, next: NextFunction) => {
    try{
        if(req.headers.authorization != null){
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken : any = jwt.verify(token, ''+process.env.RANDOM_TOKEN_SECRET);
            const userId = decodedToken.userId;
            Restaurant.findOne({ _userId: userId })
                .then((restaurant) => {
                    res.status(200).send(restaurant);
                }).catch((err) => {
                res.status(404).send(err.message);
            });
        }
        else{
            throw new Error('No user infos, token error');
        }
    } catch(error){
        res.status(500).json(error);
    }
};

export let createRestaurant = (req: Request, res: Response, next: NextFunction) => {

    const restaurantObject = req.body;
    delete restaurantObject._id;
    Restaurant.findOne({ _userId: restaurantObject._userId})
        .then((response) => {
            console.log(response);
            if(response === null){
                const restaurant = new Restaurant({ ...restaurantObject });
                restaurant.save()
                    .then(() => {
                        res.status(201).send('Restaurant enregistré !')
                    }).catch((err) => {
                    res.status(400).send(err.message)
                })
            }else{
                res.status(406).send('User is already assign to a restaurant have a restaurant.');
            }
        }).catch((error) => {
            console.log(error);
            res.status(400).send(error.message)
        });



};

export let updateRestaurant = (req: Request, res: Response, next: NextFunction) => {

    const restaurantID: string = req.params.id;
    const restaurantObject = { ...req.body };

    Restaurant.updateOne({ _id: restaurantID }, { restaurantID, ...restaurantObject })
        .then(() => {
            res.status(200).send('Objet ' + restaurantID + ' modifié !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};


export let deleteRestaurant = (req: Request, res: Response, next: NextFunction) => {

    const restaurantID: string = req.params.id;

    Restaurant.deleteOne({ _id: restaurantID })
        .then(() => {
            res.status(200).send('Objet ' + restaurantID + ' supprimé !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};