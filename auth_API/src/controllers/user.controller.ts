import { User } from '../models/user.model';
import { Request, Response, NextFunction} from 'express';


export let getAllUsers = (req: Request, res: Response, next: NextFunction) => {

    User.findAll()
        .then((users) => {
            res.status(200).send(users);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getOneUser = (req: Request, res: Response, next: NextFunction) => {

    User.findOne({ _id: req.params.id })
        .then((user) => {
            res.status(200).send(user);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let createUser = (req: Request, res: Response, next: NextFunction) => {

    const userObject = req.body;
    delete userObject._id;

    const user = new User({ ...userObject })

    user.save()
        .then(() => {
            res.status(201).send('User enregistré !')
        }).catch((err) => {
        res.status(400).send(err.message)
    });

};

export let updateUser = (req: Request, res: Response, next: NextFunction) => {

    const userID: string = req.params.id;
    const userObject = { ...req.body };

    User.updateOne({ _id: userID }, { userID, ...userObject })
        .then(() => {
            res.status(200).send('Objet ' + userID + ' modifié !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};


export let deleteUser = (req: Request, res: Response, next: NextFunction) => {

    const userID: string = req.params.id;

    User.deleteOne({ _id: userID })
        .then(() => {
            res.status(200).send('Objet ' + userID + ' supprimé !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};