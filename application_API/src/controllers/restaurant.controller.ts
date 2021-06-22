import Restaurant, { RestaurantInterface } from '../models/restaurant.model';
import { Request, Response, NextFunction} from 'express';


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

export let createRestaurant = (req: Request, res: Response, next: NextFunction) => {

    const restaurantObject = req.body;
    delete restaurantObject._id;

    const restaurant = new Restaurant({ ...restaurantObject })

    restaurant.save()
        .then(() => {
            res.status(201).send('Restaurant enregistré !')
        }).catch((err) => {
        res.status(400).send(err.message)
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