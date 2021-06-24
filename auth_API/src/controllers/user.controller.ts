import { User, UserInterface } from '../models/user.model';
import { Request, Response, NextFunction} from 'express';
import {DestroyOptions, UpdateOptions} from 'sequelize';


export let getAllUsers = (req: Request, res: Response, next: NextFunction) => {

    User.findAll<User>({})
        .then((users: User[]) => res.json(users))
        .catch((err: Error) => res.status(500).json(err));

};

export let getOneUser = (req: Request, res: Response, next: NextFunction) => {

    const userId: string = req.params.id;

    User.findByPk<User>(userId)
        .then((user: User | null) => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({errors: ['User not found']});
            }
        })
        .catch((err: Error) => res.status(500).json(err));


};

export let createUser = (req: Request, res: Response, next: NextFunction) => {

    const params: UserInterface = req.body;

    User.create<User>(params)
        .then((users: User) => res.status(201).json(users))
        .catch((err: Error) => res.status(500).json(err));

};

export let updateUser = (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;
    const params: UserInterface = req.body;

    const update: UpdateOptions = {
        where: {id: userId},
        limit: 1,
    };

    User.update(params, update)
        .then(() => res.status(202).json({data: 'success'}))
        .catch((err: Error) => res.status(500).json(err));

};


export let deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;
    const options: DestroyOptions = {
        where: {id: userId},
        limit: 1,
    };

    User.destroy(options)
        .then(() => res.status(204).json({data: 'success'}))
        .catch((err: Error) => res.status(500).json(err));
};