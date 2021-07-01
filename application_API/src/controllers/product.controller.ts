import Product, { ProductInterface } from '../models/product.model';
import { Request, Response, NextFunction} from 'express';


export let getAllProducts = (req: Request, res: Response, next: NextFunction) => {

    Product.find()
        .then((products) => {
            res.status(200).send(products);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getOneProduct = (req: Request, res: Response, next: NextFunction) => {

    Product.findOne({ _id: req.params.id })
        .then((product) => {
            res.status(200).send(product);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getRestaurantProducts = (req: Request, res: Response, next: NextFunction) => {

    Product.find({ _restaurantId: req.params.id })
        .then((product) => {
            res.status(200).send(product);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let createProduct = (req: Request, res: Response, next: NextFunction) => {

    const productObject = req.body;
    delete productObject._id;

    const product = new Product({ ...productObject })

    product.save()
        .then(() => {
            res.status(201).send('Product enregistré !')
        }).catch((err) => {
        res.status(400).send(err.message)
    });

};

export let updateProduct = (req: Request, res: Response, next: NextFunction) => {

    const productID: string = req.params.id;
    const productObject = { ...req.body };

    Product.updateOne({ _id: productID }, { productID, ...productObject })
        .then(() => {
            res.status(200).send('Objet ' + productID + ' modifié !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};


export let deleteProduct = (req: Request, res: Response, next: NextFunction) => {

    const productID: string = req.params.id;

    Product.deleteOne({ _id: productID })
        .then(() => {
            res.status(200).send('Objet ' + productID + ' supprimé !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};