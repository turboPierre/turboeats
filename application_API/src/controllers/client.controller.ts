import Client, { ClientInterface } from '../models/client.model';
import { Request, Response, NextFunction} from 'express';


export let getAllClients = (req: Request, res: Response, next: NextFunction) => {

    Client.find()
        .then((clients) => {
            res.status(200).send(clients);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getOneClient = (req: Request, res: Response, next: NextFunction) => {

    Client.findOne({ _id: req.params.id })
        .then((client) => {
            res.status(200).send(client);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let createClient = (req: Request, res: Response, next: NextFunction) => {

    const clientObject = req.body;
    delete clientObject._id;

    const client = new Client({ ...clientObject })

    client.save()
        .then(() => {
            res.status(201).send('Client enregistré !')
        }).catch((err) => {
        res.status(400).send(err.message)
    });

};

export let updateClient = (req: Request, res: Response, next: NextFunction) => {

    const clientID: string = req.params.id;
    const clientObject = { ...req.body };

    Client.updateOne({ _id: clientID }, { clientID, ...clientObject })
        .then(() => {
            res.status(200).send('Objet ' + clientID + ' modifié !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};


export let deleteClient = (req: Request, res: Response, next: NextFunction) => {

    const clientID: string = req.params.id;

    Client.deleteOne({ _id: clientID })
        .then(() => {
            res.status(200).send('Objet ' + clientID + ' supprimé !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};