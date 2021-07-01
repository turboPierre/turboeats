import Menu, { MenuInterface } from '../models/menu.model';
import { Request, Response, NextFunction} from 'express';


export let getAllMenus = (req: Request, res: Response, next: NextFunction) => {

    Menu.find()
        .then((menus) => {
            res.status(200).send(menus);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getOneMenu = (req: Request, res: Response, next: NextFunction) => {

    Menu.findOne({ _id: req.params.id })
        .then((menu) => {
            res.status(200).send(menu);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getRestaurantMenus = (req: Request, res: Response, next: NextFunction) => {

    Menu.find({ _restaurantId: req.params.id })
        .then((menu) => {
            res.status(200).send(menu);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let createMenu = (req: Request, res: Response, next: NextFunction) => {

    const menuObject = req.body;
    delete menuObject._id;

    const menu = new Menu({ ...menuObject })

    menu.save()
        .then(() => {
            res.status(201).send('Menu enregistré !')
        }).catch((err) => {
        res.status(400).send(err.message)
    });

};

export let updateMenu = (req: Request, res: Response, next: NextFunction) => {

    const menuID: string = req.params.id;
    const menuObject = { ...req.body };

    Menu.updateOne({ _id: menuID }, { menuID, ...menuObject })
        .then(() => {
            res.status(200).send('Objet ' + menuID + ' modifié !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};


export let deleteMenu = (req: Request, res: Response, next: NextFunction) => {

    const menuID: string = req.params.id;

    Menu.deleteOne({ _id: menuID })
        .then(() => {
            res.status(200).send('Objet ' + menuID + ' supprimé !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};