import { User, UserInterface } from '../models/user.model';
import { Request, Response, NextFunction} from 'express';
import {DestroyOptions, UpdateOptions} from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

export let myInfos = (req: Request, res: Response, next: NextFunction) => {
    try{
        if(req.headers.authorization != null){
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken : any = jwt.verify(token, ''+process.env.RANDOM_TOKEN_SECRET);
            const userId = decodedToken.userId;
            User.findByPk<User>(userId)
                .then((user: User | null) => {
                    if (user) {
                        res.json(user);
                    } else {
                        res.status(404).json({errors: ['No user infos found']});
                    }
                })
                .catch((err: Error) => res.status(500).json(err));
        }
        else{
            throw new Error('No user infos, token error');
        }
    } catch(error){
        res.status(500).json(error);
    }

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

export let signup = (req: Request, res: Response, next: NextFunction) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                avatar: req.body.avatar,
                password: hash,
                address: req.body.address,
                role: req.body.role,
                active: req.body.active,
                sponsor: req.body.sponsor
            });
            user.save()
                .then(() => res.status(201).json({ message: 'User registered' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

export let login = (req: Request, res: Response, next: NextFunction) => {
    User.findOne({ where: { email: req.body.email}})
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Incorrect user/pass' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Incorrect user/pass' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            ''+process.env.RANDOM_TOKEN_SECRET,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};